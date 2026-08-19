/**
 * ===========================================================
 *  EDIT ALL YOUR WEDDING DETAILS HERE — nothing else needed.
 * ===========================================================
 */
export const wedding = {
  // --- Couple ---
  brideName: "Danish",
  groomName: "Putri",
  initials: "D&P", // shown on the envelope seal

  // --- Date & time ---
  dateShort: "02 · 01 · 2027", // hero + footer
  dateLong: "Saturday, 2nd January 2027", // event details card
  time: "11:00 AM – 4:00 PM",
  receptionTime: "12:00 PM",

  // --- Venue ---
  venueName: "Kampung Pasir Baru",
  venueAddress: "Lot 12, Lorong Cempaka, Kampung Pasir Baru, Semenyih, Selangor",
  // Google Maps: right-click your venue → "Copy coordinates"
  mapLat: 2.99754157965641,
  mapLng:  101.87299644720257,

  // --- Wording ---
  heroTagline: "Alhamdulillah",
  invitationOpening:
    "With the blessing of Allah SWT, we cordially invite you to celebrate the union of our beloved",
  invitationClosing:
    "We would be honoured by your presence as we begin this beautiful journey together. Your prayers and blessings mean the world to us.",
  receptionNote:
    "with a traditional Malay feast. Entertainment and festivities will follow.",
  quote:
    '"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them." — Ar-Rum 30:21',
  footerNote: "We can't wait to celebrate with you",

  // --- Background music ---
  // Paste a DIRECT audio link (must end in .mp3 / .m4a / .ogg). Leave "" to hide the button.
  musicUrl: "https://youtu.be/lY5V4hSLWY8?list=RDlY5V4hSLWY8",
  musicVolume: 0.7, // 0 = silent, 1 = full volume


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
