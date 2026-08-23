# Agency template system — one config per client

Speed up cold outreach: each hotel/business = one config file.

## How it works
- `client.config.js` (repo root) holds **all** client-specific data.
- `src/App.jsx` imports that config and renders the site from it — no code edits
  needed to re-skin a demo.
- `src/styles.css` reads brand colors as CSS custom properties, so the theme is
  config-driven too.

## client.config.js shape
```js
export default {
  clientName: "Rivergate Hotel & Suites",
  tagline: "Your 4-star stay in the heart of Port Harcourt",
  location: "GRA Phase 2, Port Harcourt, Rivers State, Nigeria",
  rooms: [
    { name: "Standard Room", price: "₦38,000", desc: "...", img: "/img/room1.jpg" },
  ],
  amenities: ["Outdoor pool", "Free Wi-Fi"],
  phone: "+234 905 777 7780",
  whatsappNumber: "2349057777780",        // digits only, used for wa.me links
  heroImage: "/img/hero.jpg",
  roomImages: ["/img/room1.jpg", "/img/room2.jpg", "/img/hero.jpg"],
  brandColors: { primary, accent, accent2, bg, text },
};
```

## Files
- `client.config.example.js` — fully commented template (copy this per client).
- `client.config.js` — the live default (Rivergate Hotel & Suites).
- `src/App.jsx` — imports `../client.config.js`, renders everything from it.
- `src/styles.css` — maps `brandColors` to CSS custom properties.

## Spin up a new client
1. Copy `client.config.example.js` → `clients/<name>/client.config.js`, fill in.
2. Point `src/App.jsx`'s import at the new file (or place it at repo root).
3. `npm run build` — outputs `dist/`.

## Booking form
Wired to WhatsApp: submissions open `https://wa.me/<whatsappNumber>?text=...`
with the reservation prefilled. No backend required.

## Status
Implemented 2026-08-23. `src/App.jsx` is fully config-driven and the build passes.
