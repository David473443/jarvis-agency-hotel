import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Alias @threeui to the cloned ThreeUI community source so we consume
// the real, working components directly (no npm auth/provenance needed).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@threeui": path.resolve(__dirname, "threeui-src"),
    },
  },
  server: {
    host: true,
    port: 5174,
  },
});
