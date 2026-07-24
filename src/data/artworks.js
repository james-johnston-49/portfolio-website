// Each artwork has an `images` array rather than a single `image`.
// Pieces with only one image just have a one-item array.
// Pieces with multiple versions (v1/v2) list them in order - this is
// what will let the card and modal flip between versions later,
// and it's the same shape we'll reuse for full progress-stage artworks
// (sketch -> lineart -> colour -> final) down the line.

export const artworks = [
  {
    id: "moss-cat",
    title: "Lilavine",
    medium: "Digital",
    year: 2024,
    description:
      "An original swamp-dwelling feline creature inspired by moss, wetland ecosystems, and the mythical Serpopard.",
    tags: ["Original Creature", "Illustration", "Creature"],
    images: ["/assets/gallery/moss-cat-creature.png"],
  },
  {
    id: "smwf",
    title: "Spider-Man (Remington Blake Fan Art)",
    medium: "Digital",
    year: 2024,
    description:
      "Fan art of Spider-Man Who F*cks, an original spider-sona created by Remington Blake.",
    tags: ["Fanart", "Character", "Comic Style", "Superhero"],
    images: ["/assets/gallery/spider-man-fanart.png"],
  },
  {
    id: "devil-horned-lizard",
    title: "Horned Devil",
    medium: "Digital",
    year: 2024,
    description:
      "An original reptilian creature inspired by horned lizards, with a design style loosely influenced by Pokémon creatures.",
    tags: ["Original Creature", "Illustration", "Creature"],
    images: [
      "/assets/gallery/devil-horned-lizard.png",
      "/assets/gallery/devil-horned-lizard-lineart.jpg",
      "/assets/gallery/devil-horned-lizard-v1.png",
    ],
  },
  {
    id: "mara",
    title: "Mara, Nexomon Fanart",
    medium: "Digital",
    year: 2024,
    description: "Fanart of Mara from Nexomon: Extinction.",
    tags: ["Fan Art", "Creature", "Illustration"],
    images: ["/assets/gallery/nexomon-mara-fanart.png"],
  },
  {
    id: "statue",
    title: '"I Love Your Modesty"',
    medium: "Digital",
    year: 2025,
    description:
      "A painterly digital interpretation inspired by, Saint Catherine of Siena, a classical marble sculpture.",
    tags: ["Digital Painting", "Painterly", "Personal Project"],
    images: [
      "/assets/gallery/statue-woman.png",
      "/assets/gallery/statue-woman-v2.png",
    ],
  },
  {
    id: "ky-ren",
    title: "Ky-Ren",
    medium: "Digital",
    year: 2025,
    description:
      "Concept artwork introducing my original superhero character, Ky-Ren.",
    tags: [
      "Character Design",
      "Original Character",
      "Comic Style",
      "Superhero",
    ],
    images: ["/assets/gallery/the-deltas.png"],
  },
  {
    id: "batman",
    title: "Absolute Batman",
    medium: "Digital",
    year: 2026,
    description:
      "A digital painting recreating a panel from DC's Absolute comics.",
    tags: ["Painterly", "Comic Art", "Fan Art", "Superhero", "Character"],
    images: ["/assets/gallery/batman-fanart.png"],
  },
  {
    id: "gr11-artwork",
    title: "A Distorted Sense of Self",
    medium: "Digital",
    year: 2024,
    description:
      "Created for a Grade 11 art project exploring abstraction, distortion, and fragmentation.",
    tags: ["Digital Painting", "Abstract", "Surreal", "School Project"],
    images: ["/assets/gallery/abstract-painting.png"],
  },
  {
    id: "lina-fairy",
    title: "Bulk Fairy",
    medium: "Digital",
    year: 2026,
    description:
      "A quick sketch directly inspired by reference images of Bulk Fairy.",
    tags: ["Sketch"],
    images: ["/assets/gallery/lina-fairy.png"],
  },
  {
    id: "dino",
    title: "Untitled Creature",
    medium: "Digital",
    year: 2026,
    description:
      "An original creature inspired by my earlier Horned Devil artwork, rendered as a digital painting.",
    tags: ["Digital Painting", "Original Creature", "Creature"],
    images: [
      "/assets/gallery/dinosaur-painting.png",
      "/assets/gallery/dinosaur-painting-v2.png",
      "/assets/gallery/dino-sketch-v2.png",
      "/assets/gallery/dino-sketch-v1.png",
    ],
  },
  {
    id: "poison-ivy",
    title: "Absolute Poison Ivy",
    medium: "Digital",
    year: 2026,
    description:
      "A digital painting of Absolute Poison Ivy inspired by the comics.",
    tags: ["Painterly", "Character", "Fan Art", "Superhero", "Comic Art"],
    images: [
      "/assets/gallery/poison-ivy-fanart.png",
      "/assets/gallery/poison-ivy-fanart-v2.png",
    ],
  },
  {
    id: "luna-sketch",
    title: "Lunamyosotis Sketch",
    medium: "Digital",
    year: 2026,
    description:
      "",
    tags: ["", "", ""],
    images: [
      "/assets/gallery/luna-sketch-v2.png",
      "/assets/gallery/luna-sketch-v1.png",
    ],
  },
  {
    id: "symbiote-spiderman",
    title: "Symbiote Spider-Man Lineart",
    medium: "Digital",
    year: 2026,
    description:
      "",
    tags: ["", "", ""],
    images: [
      "/assets/gallery/symbiote-spiderman.png",
    ],
  },
  {
    id: "kilowog",
    title: "Kilowog, DC Rivals Concept",
    medium: "Digital",
    year: 2026,
    description:
      "",
    tags: ["", "", ""],
    images: [
      "/assets/gallery/kilowog-concept.png",
    ],
  },
  {
    id: "kyren",
    title: "Ky-Ren Headshots",
    medium: "Digital",
    year: 2026,
    description:
      "",
    tags: ["", "", ""],
    images: [
      "/assets/gallery/kyren-v1.jpg",
      "/assets/gallery/kyren-v2.jpg",
    ],
  },
  {
    id: "deadpool",
    title: "Deadpool Fan Art",
    medium: "Digital",
    year: 2026,
    description:
      "",
    tags: ["", "", ""],
    images: [
      "/assets/gallery/deadpool.png",
    ],
  },
  {
    id: "spider-jam",
    title: "Spider-Jam",
    medium: "Digital",
    year: 2026,
    description:
      "",
    tags: ["", "", ""],
    images: [
      "/assets/gallery/spider-jam-2.png",
      "/assets/gallery/spider-jam-1.png",
    ],
  },
];
