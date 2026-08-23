import React, { useState } from "react";
import { AtTheHorizon } from "@threeui/package-components/AtTheHorizon";
import { CloudField } from "@threeui/package-components/CloudField";
import { Gallery } from "@threeui/package-components/Gallery";
import { EditorialIntroSection } from "@threeui/package-components/EditorialIntroSection";
import { FloatingDotsCta } from "@threeui/package-components/FloatingDotsCta";
import { NewsletterFooterSection } from "@threeui/package-components/NewsletterFooterSection";
import { BrandOrbs } from "@threeui/package-components/BrandOrbs";

// One config file per client — swap this import to re-skin the whole demo.
import config from "../client.config.js";

const {
  clientName: CLIENT,
  tagline: TAGLINE,
  location: LOCATION,
  rooms: ROOMS,
  amenities: AMENITIES,
  phone: PHONE,
  whatsappNumber: WHATSAPP_NUMBER,
  heroImage: HERO_IMAGE,
  roomImages: ROOM_IMAGES,
  brandColors: BRAND,
} = config;

// Apply config brand colors as CSS custom properties (cascade to all children).
const brandStyle = {
  "--brand-primary": BRAND.primary,
  "--brand-accent": BRAND.accent,
  "--brand-accent2": BRAND.accent2,
  "--brand-bg": BRAND.bg,
  "--brand-text": BRAND.text,
};

// Split the client name into a nav brand: "Rivergate" + "HOTEL & SUITES".
const [brandFirst, ...brandRest] = CLIENT.split(" ");

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    room: ROOMS[0]?.name ?? "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const msg =
      `Hello ${CLIENT} 👋%0A*New room reservation request*%0A` +
      `Name: ${encodeURIComponent(form.name || "-")}%0A` +
      `Email: ${encodeURIComponent(form.email || "-")}%0A` +
      `Check-in: ${encodeURIComponent(form.checkin || "-")}%0A` +
      `Check-out: ${encodeURIComponent(form.checkout || "-")}%0A` +
      `Room: ${encodeURIComponent(form.room)}`;
    // Open WhatsApp with the prefilled booking (works on mobile + desktop).
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <div className="site" style={brandStyle}>
      <nav className="nav">
        <div className="nav__brand">
          {brandFirst}
          <span> {brandRest.join(" ")}</span>
        </div>
        <div className="nav__links">
          <a href="#rooms">Rooms</a>
          <a href="#amenities">Amenities</a>
          <a href="#story">Story</a>
          <a href="#book">Book</a>
        </div>
        <a className="nav__cta" href="#book">
          Reserve now
        </a>
      </nav>

      <header
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(6,7,10,.55), rgba(6,7,10,.85)), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero__scene">
          <AtTheHorizon />
        </div>
        <div className="hero__copy">
          <p className="hero__eyebrow">{TAGLINE}</p>
          <h1>{CLIENT}</h1>
          <p className="hero__lede">
            A 4-star stay in the heart of {LOCATION.split(",")[0]} — 101 rooms,
            an outdoor pool, and dining that blends Nigerian warmth with
            international comfort. Built for business travellers and weekend
            escapes.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#book">
              Book your stay
            </a>
            <a className="btn btn--ghost" href="#rooms">
              View rooms
            </a>
          </div>
        </div>
      </header>

      <section className="band">
        <CloudField />
      </section>

      <section id="story" className="section section--split">
        <div className="split__text">
          <h2 className="section__title">Where the city meets the river</h2>
          <p>
            {CLIENT} sits in {LOCATION.split(",")[0]}, minutes from the Port
            Harcourt business district and the airport road. We designed it for
            people who travel for work but still want a place that feels like a
            retreat — quiet rooms, fast Wi-Fi, and a pool that catches the sunset
            over the Delta.
          </p>
          <p>
            Every detail, from the linen to the late-night menu, is built around
            one idea: you should leave more rested than you arrived.
          </p>
        </div>
        <div className="split__scene">
          <EditorialIntroSection />
        </div>
      </section>

      <section id="rooms" className="section">
        <h2 className="section__title">Rooms &amp; suites</h2>
        <div className="rooms">
          {ROOMS.map((r) => (
            <article className="room" key={r.name}>
              <div
                className="room__img"
                style={{ backgroundImage: `url(${r.img})` }}
              />
              <div className="room__body">
                <div className="room__top">
                  <h3>{r.name}</h3>
                  <span className="room__price">
                    {r.price}
                    <small>/night</small>
                  </span>
                </div>
                <p>{r.desc}</p>
                <a className="btn btn--ghost btn--sm" href="#book">
                  Reserve
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Photo strip driven by config.roomImages[] */}
        <div className="rooms__tour">
          {ROOM_IMAGES.map((src, i) => (
            <div
              className="rooms__tour-img"
              key={i}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        <div className="rooms__gallery">
          <Gallery />
        </div>
      </section>

      <section id="amenities" className="section">
        <h2 className="section__title">Everything you need</h2>
        <div className="amenities">
          {AMENITIES.map((a) => (
            <div className="amenity" key={a}>
              ✓ {a}
            </div>
          ))}
        </div>
        <div className="band band--short">
          <BrandOrbs />
        </div>
      </section>

      <section id="book" className="section section--book">
        <h2 className="section__title">Reserve your stay</h2>
        <div className="book">
          <form className="book__form" onSubmit={submit}>
            <label>
              Full name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
              />
            </label>
            <div className="book__row">
              <label>
                Check-in
                <input
                  required
                  type="date"
                  value={form.checkin}
                  onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                />
              </label>
              <label>
                Check-out
                <input
                  required
                  type="date"
                  value={form.checkout}
                  onChange={(e) =>
                    setForm({ ...form, checkout: e.target.value })
                  }
                />
              </label>
            </div>
            <label>
              Room type
              <select
                value={form.room}
                onChange={(e) => setForm({ ...form, room: e.target.value })}
              >
                {ROOMS.map((r) => (
                  <option key={r.name}>{r.name}</option>
                ))}
              </select>
            </label>
            <button className="btn btn--primary btn--block" type="submit">
              Request reservation
            </button>
            {sent && (
              <p className="book__ok">
                ✓ Thanks {form.name || ""}! Your request opened in WhatsApp —
                our front desk will confirm your dates there.
              </p>
            )}
          </form>
          <div className="book__scene">
            <FloatingDotsCta />
          </div>
        </div>
        <p className="book__contact">
          📞 {PHONE} &nbsp;·&nbsp; 📍 {LOCATION}
        </p>
      </section>

      <NewsletterFooterSection />
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {CLIENT}
        </span>
        <span>{LOCATION}</span>
        <span>📞 {PHONE}</span>
        <span>Built with ThreeUI Community</span>
      </footer>
    </div>
  );
}
