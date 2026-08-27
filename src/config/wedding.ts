// Song lives in /public so it also works on GitHub Pages (BASE_URL handles the subpath)
const songUrl = `${import.meta.env.BASE_URL}wedding-song.mp3`;


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
  time: "12:00 PM – 4:00 PM",
  receptionTime: "12:00 PM",

  // --- Venue ---
  venueName: "Kampung Pasir Baru",
  venueAddress: "Lot 12, Lorong Cempaka, Kampung Pasir Baru, 43500, Semenyih, Selangor",
  // Google Maps: right-click your venue → "Copy coordinates"
  mapLat: 2.997552275696542,
  mapLng: 101.87299464430723,

  // --- Wording ---
  heroTagline: "Alhamdulillah",
  invitationOpening:
    "With the blessing of Allah SWT, we cordially invite you to celebrate the union of our beloved",
  invitationClosing:
    "We would be honoured by your presence as we begin this beautiful journey together. Your prayers and blessings mean the world to us.",
  receptionNote: "with a traditional Malay feast.",
  quote:
    '"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them." — Ar-Rum 30:21',
  footerNote: "We can't wait to celebrate with you",

  // --- Background music ---
  // Paste a DIRECT audio link (must end in .mp3 / .m4a / .ogg). Leave "" to hide the button.
  musicUrl: songUrl,
  musicVolume: 0.5, // 0 = silent, 1 = full volume



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

const mapQuery = encodeURIComponent(`${wedding.venueName}, ${wedding.venueAddress}`);
const coords = `${wedding.mapLat},${wedding.mapLng}`;
const destination = encodeURIComponent(`${wedding.venueName}, ${coords}`);

// Classic embed host — the most reliable one for iframes (no API key needed).
export const mapEmbedUrl = `https://maps.google.com/maps?q=${coords}&z=16&hl=en&output=embed`;
// Opens the venue pin directly in the Google Maps app (or web, if not installed).
export const mapPinUrl = `https://www.google.com/maps/search/?api=1&query=${destination}`;
// Turn-by-turn navigation to the venue.
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
export const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
