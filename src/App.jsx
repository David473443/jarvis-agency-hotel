import React, { useState } from "react";
import { AtTheHorizon } from "@threeui/package-components/AtTheHorizon";
import { CloudField } from "@threeui/package-components/CloudField";
import { Gallery } from "@threeui/package-components/Gallery";
import { EditorialIntroSection } from "@threeui/package-components/EditorialIntroSection";
import { FloatingDotsCta } from "@threeui/package-components/FloatingDotsCta";
import { NewsletterFooterSection } from "@threeui/package-components/NewsletterFooterSection";
import { BrandOrbs } from "@threeui/package-components/BrandOrbs";

// Real scraped Port Harcourt hotel data (101 rooms, GRA Phase 2, real room types).
const ROOMS = [
  { name: "Standard Room", price: "₦38,000", desc: "Comfortable, well-appointed room with city view, work desk and smart TV.", img: "/img/room1.jpg" },
  { name: "Superior Room", price: "₦52,000", desc: "Larger room with premium linen, lounge corner and upgraded amenities.", img: "/img/room2.jpg" },
  { name: "Executive Suite", price: "₦95,000", desc: "Separate lounge, river-facing view and butler-level service.", img: "/img/hero.jpg" },
  { name: "Presidential Suite", price: "₦210,000", desc: "Two-bedroom suite with private terrace, dining and full service.", img: "/img/room2.jpg" },
];

const AMENITIES = [
  "Outdoor swimming pool", "Fitness centre", "Restaurant (African, American, Mediterranean)",
  "Bar & lounge", "24h room service", "Free high-speed Wi-Fi", "Free parking",
  "5 meeting rooms", "Roundtrip airport shuttle", "101 guest rooms",
];

const PHONE = "+234 905 777 7780";
const ADDRESS = "GRA Phase 2, Port Harcourt, Rivers State, Nigeria";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", checkin: "", checkout: "", room: "Standard Room" });
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="site">
      <nav className="nav">
        <div className="nav__brand">RIVERGATE<span>HOTEL</span></div>
        <div className="nav__links">
          <a href="#rooms">Rooms</a>
          <a href="#amenities">Amenities</a>
          <a href="#story">Story</a>
          <a href="#book">Book</a>
        </div>
        <a className="nav__cta" href="#book">Reserve now</a>
      </nav>

      <header className="hero">
        <div className="hero__scene"><AtTheHorizon /></div>
        <div className="hero__copy">
          <p className="hero__eyebrow">PORT HARCOURT · RIVERS STATE</p>
          <h1>Rivergate Hotel<br/>&amp; Suites</h1>
          <p className="hero__lede">A 4-star stay in the heart of GRA Phase 2 — 101 rooms,
             an outdoor pool, and dining that blends Nigerian warmth with international comfort.
             Built for business travellers and weekend escapes.</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#book">Book your stay</a>
            <a className="btn btn--ghost" href="#rooms">View rooms</a>
          </div>
        </div>
      </header>

      <section className="band"><CloudField /></section>

      <section id="story" className="section section--split">
        <div className="split__text">
          <h2 className="section__title">Where the city meets the river</h2>
          <p>Rivergate sits in GRA Phase 2, minutes from the Port Harcourt business
             district and the airport road. We designed it for people who travel for work
             but still want a place that feels like a retreat — quiet rooms, fast Wi-Fi,
             and a pool that catches the sunset over the Delta.</p>
          <p>Every detail, from the linen to the late-night menu, is built around one
             idea: you should leave more rested than you arrived.</p>
        </div>
        <div className="split__scene"><EditorialIntroSection /></div>
      </section>

      <section id="rooms" className="section">
        <h2 className="section__title">Rooms &amp; suites</h2>
        <div className="rooms">
          {ROOMS.map((r) => (
            <article className="room" key={r.name}>
              <div className="room__img" style={{ backgroundImage: `url(${r.img})` }} />
              <div className="room__body">
                <div className="room__top"><h3>{r.name}</h3><span className="room__price">{r.price}<small>/night</small></span></div>
                <p>{r.desc}</p>
                <a className="btn btn--ghost btn--sm" href="#book">Reserve</a>
              </div>
            </article>
          ))}
        </div>
        <div className="rooms__gallery"><Gallery /></div>
      </section>

      <section id="amenities" className="section">
        <h2 className="section__title">Everything you need</h2>
        <div className="amenities">
          {AMENITIES.map((a) => (<div className="amenity" key={a}>✓ {a}</div>))}
        </div>
        <div className="band band--short"><BrandOrbs /></div>
      </section>

      <section id="book" className="section section--book">
        <h2 className="section__title">Reserve your stay</h2>
        <div className="book">
          <form className="book__form" onSubmit={submit}>
            <label>Full name<input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="you@email.com" /></label>
            <div className="book__row">
              <label>Check-in<input required type="date" value={form.checkin} onChange={(e)=>setForm({...form,checkin:e.target.value})} /></label>
              <label>Check-out<input required type="date" value={form.checkout} onChange={(e)=>setForm({...form,checkout:e.target.value})} /></label>
            </div>
            <label>Room type
              <select value={form.room} onChange={(e)=>setForm({...form,room:e.target.value})}>
                {ROOMS.map((r)=>(<option key={r.name}>{r.name}</option>))}
              </select>
            </label>
            <button className="btn btn--primary btn--block" type="submit">Request reservation</button>
            {sent && <p className="book__ok">✓ Thanks {form.name || ""}! Our front desk will confirm by email. (Wire to WhatsApp in production.)</p>}
          </form>
          <div className="book__scene"><FloatingDotsCta /></div>
        </div>
        <p className="book__contact">📞 {PHONE} &nbsp;·&nbsp; 📍 {ADDRESS}</p>
      </section>

      <NewsletterFooterSection />
      <footer className="footer">
        <span>© {new Date().getFullYear()} Rivergate Hotel &amp; Suites</span>
        <span>{ADDRESS}</span>
        <span>📞 {PHONE}</span>
        <span>Built with ThreeUI Community</span>
      </footer>
    </div>
  );
}
