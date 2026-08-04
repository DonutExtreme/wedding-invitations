/**
 * ===========================================================
 *  EDIT ALL YOUR WEDDING DETAILS HERE — nothing else needed.
 * ===========================================================
 */
export const wedding = {
  // --- Couple ---
  brideName: "Nurul",
  groomName: "Ahmad",
  initials: "N&A", // shown on the envelope seal

  // --- Date & time ---
  dateShort: "15 · 11 · 2025", // hero + footer
  dateLong: "Saturday, 15th November 2025", // event details card
  time: "11:00 AM – 4:00 PM",
  receptionTime: "12:00 PM",

  // --- Venue ---
  venueName: "Dewan Seri Endon",
  venueAddress: "Dewan Seri Endon, Shah Alam, Selangor, Malaysia",
  // Google Maps: right-click your venue → "Copy coordinates"
  mapLat: 3.07,
  mapLng: 101.5,

  // --- Wording ---
  heroTagline: "We're Getting Married",
  invitationOpening:
    "With the blessing of Allah SWT, we cordially invite you to celebrate the union of our beloved",
  invitationClosing:
    "We would be honoured by your presence as we begin this beautiful journey together. Your prayers and blessings mean the world to us.",
  receptionNote:
    "with a traditional Malay feast. Entertainment and festivities will follow.",
  quote:
    '"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them." — Ar-Rum 30:21',
  footerNote: "We can't wait to celebrate with you",

  // --- Dress code palette ---
  dressCodeNote:
    "We kindly request our guests to dress in soft, elegant tones to complement our colour palette.",
  dressColors: [
    { name: "Ivory", color: "hsl(40, 33%, 97%)" },
    { name: "Dusty Rose", color: "hsl(350, 30%, 80%)" },
    { name: "Sage", color: "hsl(140, 15%, 70%)" },
    { name: "Gold", color: "hsl(38, 60%, 55%)" },
    { name: "Champagne", color: "hsl(38, 40%, 80%)" },
  ],
};

export const mapEmbedUrl = `https://www.google.com/maps?q=${wedding.mapLat},${wedding.mapLng}&z=16&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${wedding.mapLat},${wedding.mapLng}`;
