// Hand-picked pieces for the Studio pinboard.
// type + id map to an entry in artworks.js or poems.js.
// rotation is fixed (not randomized) so the board looks the same every visit.
// excerpt only applies to poems: 'line' shows the opening line,
// 'stanza' shows the opening stanza (paragraph before the first blank line).

export const featured = [
  { type: "artwork", id: "kyren", size: "large", rotation: -6 },
  { type: "artwork", id: "poison-ivy", size: "medium", rotation: 5 },
  { type: "artwork", id: "moss-cat", size: "medium", rotation: -3 },
  {
    type: "poem",
    id: "moon-remind-me",
    size: "medium",
    rotation: 4,
    excerpt: "stanza",
  },
  {
    type: "poem",
    id: "hiketeia",
    size: "medium",
    rotation: -5,
    excerpt: "stanza",
  },
  {
    type: "poem",
    id: "your-happiest",
    size: "small",
    rotation: 3,
    excerpt: "line",
  },
];
