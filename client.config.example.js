// =============================================================================
// AGENCY TEMPLATE — one client = one config file.
// Copy this file to `clients/<client-name>/client.config.js`, fill in the real
// values, then point src/App.jsx at it (or keep it at the repo root for the
// default demo). Every field below is consumed by src/App.jsx.
//
// Image paths are served from /public, so a photo at public/img/hero.jpg is
// referenced here as "/img/hero.jpg".
// =============================================================================

export default {
  // --- Identity ---------------------------------------------------------------
  clientName: "Rivergate Hotel & Suites", // shown in nav, hero title, footer
  tagline: "Your 4-star stay in the heart of Port Harcourt", // hero eyebrow
  location: "GRA Phase 2, Port Harcourt, Rivers State, Nigeria", // address / footer

  // --- Rooms ------------------------------------------------------------------
  // Each room drives a card + the booking-form room dropdown. `img` is a path
  // under /public (e.g. public/img/room1.jpg -> "/img/room1.jpg").
  rooms: [
    {
      name: "Standard Room",
      price: "₦38,000",
      desc: "Comfortable, well-appointed room with city view, work desk and smart TV.",
      img: "/img/room1.jpg",
    },
    {
      name: "Superior Room",
      price: "₦52,000",
      desc: "Larger room with premium linen, lounge corner and upgraded amenities.",
      img: "/img/room2.jpg",
    },
    {
      name: "Executive Suite",
      price: "₦95,000",
      desc: "Separate lounge, river-facing view and butler-level service.",
      img: "/img/hero.jpg",
    },
    {
      name: "Presidential Suite",
      price: "₦210,000",
      desc: "Two-bedroom suite with private terrace, dining and full service.",
      img: "/img/room2.jpg",
    },
  ],

  // --- Amenities (free-form strings) ------------------------------------------
  amenities: [
    "Outdoor swimming pool",
    "Fitness centre",
    "Restaurant (African, American, Mediterranean)",
    "Bar & lounge",
    "24h room service",
    "Free high-speed Wi-Fi",
    "Free parking",
    "5 meeting rooms",
    "Roundtrip airport shuttle",
    "101 guest rooms",
  ],

  // --- Contact -----------------------------------------------------------------
  phone: "+234 905 777 7780", // displayed in booking section + footer
  whatsappNumber: "2349057777780", // digits only, used for wa.me booking link

  // --- Images ------------------------------------------------------------------
  heroImage: "/img/hero.jpg", // backdrop behind the 3D hero (fallback if 3D fails)
  roomImages: ["/img/room1.jpg", "/img/room2.jpg", "/img/hero.jpg"], // photo strip

  // --- Brand colors (CSS custom properties, applied to the site root) ----------
  brandColors: {
    primary: "#5eead4", // main action color (buttons, links)
    accent: "#f5b942", // warm secondary accent (headings, prices)
    accent2: "#818cf8", // gradient partner for primary
    bg: "#06070a", // page background
    text: "#eef1f6", // default foreground text
  },
};
