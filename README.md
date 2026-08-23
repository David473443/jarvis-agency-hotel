# J.A.R.V.I.S. Agency — Hotel Website Builder

Client websites built with **ThreeUI Community** (160+ free 3D hero sections
for Three.js/React). This scaffold powers the AI web agency's client demos.

## Current live demo: Rivergate Hotel & Suites (Port Harcourt)
A full hotel site: 3D hero, story section, rooms gallery, amenities, a working
booking form, and 3D CTA — all using real ThreeUI components.

## Run locally
```
cd /opt/data/agency
npm install
npm run dev      # http://localhost:5174
```

## Structure
- `src/App.jsx` — the hotel site (hero, story, rooms, amenities, booking, footer).
- `src/styles.css` — dark agency/hotel theme.
- `index.html` — title + SEO meta.
- `vite.config.js` — aliases `@threeui` → `/opt/data/threeui/src` (real components).

## How ThreeUI components work (important)
Each component (`AtTheHorizon`, `Gallery`, `EditorialIntroSection`,
`FloatingDotsCta`, `NewsletterFooterSection`, `CloudField`, `BrandOrbs`, etc.)
renders a **self-contained 3D scene inside a sandboxed `<iframe>`** loaded from
an inline HTML file — no CDN, fully offline. Drop them into a sized container.
Full list: `/opt/data/threeui/src/index.ts`.

## Booking form
Currently a front-end demo (confirms on submit). To make it real, POST to a
backend or forward to WhatsApp (Twilio/own number). Wire in `src/App.jsx` `submit()`.

## Deploy
```
npm run build    # outputs dist/
```
Deploy `dist/` to Netlify / Vercel / Railway. The ThreeUI source
(`/opt/data/threeui`) must stay on disk at build time (alias). For production,
either vendor the components into this repo or `npm install @designcodeio/threeui`
and import from the package instead of the source alias.

## Make it a REAL client
1. Replace "Rivergate Hotel & Suites" name/copy with the client's.
2. Swap room data + images in `ROOMS` (App.jsx).
3. Update phone/address/footer.
4. Optional: template via a `client.config.js` so each hotel = one config file.
