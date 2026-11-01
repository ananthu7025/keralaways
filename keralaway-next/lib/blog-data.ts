export type BlogPost = {
  slug: string;
  title: string;
  kicker: string;
  heroImage: string;
  heroAlt: string;
  byline: string;
  dropcap: string;
  body: string[];
  quote: string;
  afterQuote: string[];
  author: {
    name: string;
    role: string;
    image: string;
    bio: string;
  };
  related: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "theyyam-dancers",
    title: "A morning with the Theyyam dancers of Kannur",
    kicker: "Photo Story — Issue 04",
    heroImage: "/images/theyyam.jpg",
    heroAlt: "Theyyam dancer",
    byline: "Written and photographed by Aravind Menon · May 2026",
    dropcap:
      "The bells begin before the birds. It is 03:45 AM in a quiet village shrine north of Kannur, and the air smells of crushed ginger, camphor, and damp wood ashes. Under the flickering glow of brass oil lamps, a man sits perfectly still on a wooden bench while red mineral paste is painted onto his cheeks.",
    body: [
      "He is not acting. In a few hours, when the heavy circular headdress of palm leaves and red cloth is secured onto his shoulders, he will no longer be a planter or a weaver. He will be the deity himself.",
    ],
    quote:
      "For three hundred years, my family has painted their faces. We do not portray the god; we carry the god. The fire does not burn when you are no longer human.",
    afterQuote: [
      "As the drummers begin their rapid, hypnotic rhythm, the Theyyam dancer moves toward the fire bed. The embers are a foot deep, red hot and glowing. With a sudden cry that silences the crowd, he leaps directly into the coals, kicking up a shower of gold sparks. He walks through it slowly, three times, his feet bare and unbothered.",
      "Witnessing Theyyam in a village shrine is the antithesis of a stage performance. There are no tickets, no microphones, and no barriers. You sit on the red clay earth alongside families, breathing the smoke of burning husks, sharing the silence of a ritual that has not changed since the middle ages.",
    ],
    author: {
      name: "Aravind Menon",
      role: "Writer & Photographer",
      image: "/images/tea-portrait.jpg",
      bio: "Aravind is a documentarian based in Thrissur. He has spent the last eight years photographing the sacred art forms and local temple festivals of northern Malabar.",
    },
    related: ["best-meal", "houseboat-captain"],
  },
  {
    slug: "best-meal",
    title: "Why the best meal in Kerala is eaten standing up",
    kicker: "Food Chronicle — Issue 04",
    heroImage: "/images/food-spices.jpg",
    heroAlt: "Kerala sadya food on banana leaf",
    byline: "Written by Anjali R. · April 2026",
    dropcap:
      "If you ask a tourist guide where to eat in Alleppey, they will send you to a lakeside hotel with air conditioning, glass tables, and cutlery. But if you ask a local canoe pilot, they will point to a windowless thatched shack on a narrow mud bank, smelling of woodsmoke and hot coconut oil.",
    body: [
      "This is a toddy shop (shaap). There are no chairs here, just wooden counters worn smooth by elbows and damp glasses. You stand shoulder-to-shoulder with planters, boatmen, and merchants.",
    ],
    quote:
      "In a toddy shop, all barriers disappear. You are there for the heat of the pepper, the sourness of the toddy, and the shared space of the river.",
    afterQuote: [
      "The menu is simple: freshwater pearl spot (karimeen) fried with red chili paste, spicy duck curry, and steamed tapioca. Everything is served on banana leaves. You eat with your hands, standing up, cooling your palate with sips of sweet, fermenting coconut toddy.",
      "Eating standing up changes your relation to the meal. It is active, communal, and focused. You don't linger over coffee; you consume the spices, talk with your neighbor about the river currents, and make way for the next guest. It is the most honest meal you can find on the coast.",
    ],
    author: {
      name: "Anjali R.",
      role: "Culinary Curator",
      image: "/images/fishermen.jpg",
      bio: "Anjali coordinates food research at Keralaway. She has documented over forty heritage family recipes across the Malabar and Travancore coasts.",
    },
    related: ["theyyam-dancers", "houseboat-captain"],
  },
  {
    slug: "houseboat-captain",
    title: "Letters from a houseboat captain, second-generation",
    kicker: "Local Voice — Issue 04",
    heroImage: "/images/houseboat-dusk.jpg",
    heroAlt: "Houseboat on backwaters",
    byline: "Written by Thomas K. · March 2026",
    dropcap:
      "My father steered his first wooden kettuvallam using a giant bamboo pole. In those days, there were no engines. The boats carried rice husks, coir fiber, and dried pepper from rural farms to the port of Kochi. They moved with the wind and the muscle of two men.",
    body: [
      "Today, the backwaters are filled with diesel engines and large double-deck tourist boats playing loud music. But if you know the currents, you can still find the quiet waters.",
    ],
    quote:
      "The river doesn't care about itineraries. If you try to rush a houseboat, you lose the balance. The beauty is in the drift, in the slow turn where the palms meet the sky.",
    afterQuote: [
      "I navigate my boat into the narrow, shallow channels of Kuttanad, where the big tour boats cannot enter. Here, the water is clear enough to see river plants. We glide past women washing pots on granite steps and children swimming with floats made of dried coconuts.",
      "We moor the boat at dusk, not in commercial dockyards, but beside the plantations of hosts who have been our friends for generations. As the wind drops and the water turns to glass, we light the oil lamps. That is when the backwaters fall completely silent, and you remember why we call this home.",
    ],
    author: {
      name: "Thomas K.",
      role: "Houseboat Pilot & Host",
      image: "/images/kochi-street.jpg",
      bio: "Thomas is a senior host at Keralaway. Having spent his childhood on the waters of Alleppey, he leads our boat logistics and lagoon operations.",
    },
    related: ["theyyam-dancers", "monsoon-medicine"],
  },
  {
    slug: "monsoon-medicine",
    title: "The monsoon as medicine — three weeks in Palakkad",
    kicker: "Travel Essay — Issue 04",
    heroImage: "/images/ayurveda.jpg",
    heroAlt: "Ayurvedic oil pouring treatment",
    byline: "Written by Dr. Saira George · February 2026",
    dropcap:
      "Most tourists flee the Indian monsoon. They see the heavy rainfall as an obstacle to sightseeing. But in the traditional vaidyasalas of Palakkad, the monsoon is welcomed as a time of deep purification and physical rebirth.",
    body: [
      "The rain is relentless, falling in heavy sheets that turn the forest hills into a deep, glossy ink-green. The air is cool, humid, and completely free of dust. Inside the timber-walled treatment rooms, the sound of water hits the clay tiles overhead, creating a natural rhythm for healing.",
    ],
    quote:
      "Our ancestors understood that when the earth cools, the human body seeks balance. The hot sesame oil and steamed herbs work deepest when the rain is falling.",
    afterQuote: [
      "I spent three weeks under a standard Ayurvedic regimen. My days were simple: morning pulse readings, detoxifying treatments of warm herbal oils massaged by synchronized therapists, and lunches of red matta rice and wild green leaves. No screens, no schedules, no outside noise.",
      "By the second week, my joints felt lighter, my mind was silent, and the busy rhythms of the city felt completely distant. I realized that the monsoon is not a season to be avoided. It is a natural medicine, a time to pull back, rest, and let the rain wash away the noise.",
    ],
    author: {
      name: "Dr. Saira George",
      role: "Author & Wellness Researcher",
      image: "/images/ayurveda.jpg",
      bio: "Dr. Saira is a physician and wellness writer. She conducts comparative studies on traditional healing systems and operates a holistic clinic in London.",
    },
    related: ["theyyam-dancers", "best-meal"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
