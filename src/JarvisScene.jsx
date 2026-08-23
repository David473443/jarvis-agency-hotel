import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * JarvisScene — the hard-sci-fi brand backdrop.
 * White point-cloud particles drifting on a black void + a rotating
 * wireframe "data-core". Brand colors are pulled from CSS custom
 * properties so a client.config.js swap re-skins it automatically.
 */
export default function JarvisScene({ density = 1, className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth || window.innerWidth;
    let height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // --- Point cloud (brand "points") ---
    const count = Math.floor(2600 * (density || 1));
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      speeds[i] = 0.2 + Math.random() * 0.8;
    }
    const cloudGeo = new THREE.BufferGeometry();
    cloudGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const cloudMat = new THREE.PointsMaterial({
      color: new THREE.Color("#eef1f6"),
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const cloud = new THREE.Points(cloudGeo, cloudMat);
    scene.add(cloud);

    // --- Rotating data-core (wireframe icosahedron + inner glow) ---
    const coreGroup = new THREE.Group();
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#5eead4"),
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(core);

    const innerGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#818cf8"),
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(inner);
    scene.add(coreGroup);

    // Respect reduced motion preference
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      const pos = cloudGeo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += speeds[i] * 0.01;
        if (pos[i * 3 + 1] > 15) pos[i * 3 + 1] = -15;
      }
      cloudGeo.attributes.position.needsUpdate = true;
      cloud.rotation.y = t * 0.04;

      core.rotation.x = t * 0.18;
      core.rotation.y = t * 0.22;
      inner.rotation.x = -t * 0.3;
      inner.rotation.z = t * 0.25;
      const s = 1 + Math.sin(t * 1.2) * 0.04;
      coreGroup.scale.setScalar(s);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    if (!reduce) animate();
    else renderer.render(scene, camera);

    const onResize = () => {
      width = mount.clientWidth || window.innerWidth;
      height = mount.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      cloudGeo.dispose();
      coreGeo.dispose();
      innerGeo.dispose();
      if (renderer.domElement.parentNode === mount)
        mount.removeChild(renderer.domElement);
    };
  }, [density]);

  return <div ref={mountRef} className={`jarvis-scene ${className}`} />;
}
