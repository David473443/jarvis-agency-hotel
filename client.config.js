// Default client config — Rivergate Hotel & Suites (real scraped Port Harcourt data).
// src/App.jsx imports from this file. Swap for any client's config to re-skin the demo.
export default {
  clientName: "Rivergate Hotel & Suites",
  tagline: "Your 4-star stay in the heart of Port Harcourt",
  location: "GRA Phase 2, Port Harcourt, Rivers State, Nigeria",

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

  phone: "+234 905 777 7780",
  whatsappNumber: "2349057777780",

  heroImage: "/img/hero.jpg",
  roomImages: ["/img/room1.jpg", "/img/room2.jpg", "/img/hero.jpg"],

  brandColors: {
    primary: "#5eead4",
    accent: "#f5b942",
    accent2: "#818cf8",
    bg: "#06070a",
    text: "#eef1f6",
  },
};
