export type MapMarker = {
  x: number;
  y: number;
  label: string;
  variant?: "brass" | "spice";
  /** Label anchor side, matches old SVG text-anchor hints */
  align?: "left" | "right";
};

export type Stay = {
  kicker: string;
  name: string;
  body: string;
  features: string;
};

export type CuratedExperience = {
  no: string;
  title: string;
  body: string;
};

export type Destination = {
  slug: string;
  name: string;
  heroImage: string;
  heroAlt: string;
  heroQuote: string;
  kicker: string;
  heading: string;
  intro: string;
  stats: { label: string; value: string }[];
  mapPaths: string[];
  mapMarkers: MapMarker[];
  stays: Stay[];
  experiences: CuratedExperience[];
  ctaBody: string;
};

export const destinations: Destination[] = [
  {
    slug: "munnar",
    name: "Munnar",
    heroImage: "/images/tea-portrait.jpg",
    heroAlt: "Munnar tea fields",
    heroQuote: "To wake here is to wake inside a cloud.",
    kicker: "The High Country",
    heading: "Misty hills & cardamom breezes.",
    intro:
      "Located 1,600 meters above sea level, Munnar is where the mountains meet the clouds. Originally established by British tea planters, the landscape consists of manicured emerald tea slopes, dense cardamom forests, and cool mountain rivers.",
    stats: [
      { label: "Altitude", value: "1,600m — 2,695m" },
      { label: "Best Time", value: "September — March" },
      { label: "Smell of the air", value: "Cardamom & Eucalyptus" },
    ],
    mapPaths: [
      "M50,220 C100,180 150,250 200,200 C250,150 300,220 350,180",
      "M20,180 C80,140 140,210 210,160 C280,110 320,180 380,140",
    ],
    mapMarkers: [
      { x: 120, y: 150, label: "Lockhart Factory", variant: "brass" },
      { x: 200, y: 120, label: "Windermere Estate", variant: "brass" },
      { x: 280, y: 80, label: "Meesapulimala (2630m)", variant: "spice", align: "right" },
    ],
    stays: [
      {
        kicker: "Boutique Valley Sanctuary",
        name: "Blanket Hotel & Spa",
        body: "A luxury wellness hotel situated directly opposite Attukad Waterfalls. Enjoy rooms with panoramic valley views, private balconies, an infinity pool, and a fully equipped spa offering specialty treatments.",
        features: "Features: Waterfall views, infinity pool, wellness spa",
      },
      {
        kicker: "Premium Mountain Retreat",
        name: "SpiceTree Munnar",
        body: "Set in a scenic valley between Munnar and Thekkady, this premium mountain retreat offers wooden-finished chalets with jacuzzi, personalized spice garden walks, and local culinary workshops.",
        features: "Features: Jacuzzi suites, plantation dining, yoga hall",
      },
    ],
    experiences: [
      {
        no: "No. 01",
        title: "Planter's Trail with Lakshmi",
        body: "Join Lakshmi, who has worked the Munnar slopes for 26 years, for a slow morning walk through private tea fields, learning the fine art of selecting tea leaves.",
      },
      {
        no: "No. 02",
        title: "Meesapulimala Peak Trek",
        body: "An early morning trek with a tribal forest guard to the top of Meesapulimala. View spectacular clouds and the high peaks of the Western Ghats.",
      },
      {
        no: "No. 03",
        title: "Lockhart Factory Spice Walk",
        body: "Explore a heritage tea factory built in 1879, smelling the dry roasted tea leaves, followed by a walk through cardamom gardens to see raw pods drying.",
      },
    ],
    ctaBody: "Let's design a custom slow itinerary that takes you into the mist of the mountain estates.",
  },
  {
    slug: "alleppey",
    name: "Alleppey",
    heroImage: "/images/hero-backwaters.jpg",
    heroAlt: "Alleppey backwaters at sunrise",
    heroQuote: "Lush waterpaths & floating lives.",
    kicker: "The Waterways",
    heading: "Quiet canals & palm shores.",
    intro:
      "Alleppey (Alappuzha) is the heart of Kerala's famous backwaters. A vast network of lagoons, rivers, and canals, it is a region where water is the highway and life moves at the slow pace of a wooden paddle.",
    stats: [
      { label: "Altitude", value: "Sea Level (Kuttanad is below sea level)" },
      { label: "Best Time", value: "October — February" },
      { label: "Smell of the air", value: "Fresh water, river weed, & woodsmoke" },
    ],
    mapPaths: [
      "M50,110 C90,140 130,90 190,140 C250,190 290,120 350,150",
      "M30,80 C80,110 110,60 170,110 C230,160 270,90 330,120",
    ],
    mapMarkers: [
      { x: 110, y: 90, label: "Raheem Residency", variant: "brass" },
      { x: 190, y: 120, label: "Kayal Island Retreat", variant: "brass" },
      { x: 270, y: 160, label: "Kuttanad Canals", variant: "spice", align: "right" },
    ],
    stays: [
      {
        kicker: "Luxury Backwater Haven",
        name: "Kumarakom Lake Resort / Coconut Lagoon",
        body: "Restored premium heritage properties overlooking the tranquil backwaters of Vembanad Lake. Stay in villas featuring private plunge pools and outdoor showers, or traditional timber cottages.",
        features: "Features: Heritage cottages, sunset cruises, private pools",
      },
      {
        kicker: "Lakeside Sanctuary",
        name: "Taj Kumarakom",
        body: "A beautifully restored 150-year-old colonial bungalow, set inside tropical grounds beside the lake. Relax in quiet comfort with premium lakeside dining.",
        features: "Features: Colonial design, luxury spa, birdwatching",
      },
    ],
    experiences: [
      {
        no: "No. 01",
        title: "Dawn Canoe Drift",
        body: "A quiet paddle down the smallest channels of Kuttanad at sunrise, watching lilies bloom and children walking along the canal banks.",
      },
      {
        no: "No. 02",
        title: "Coir Weaving Workshop",
        body: "Visit a rural coir spinner to see how coconut husks are processed and hand-woven into golden coir ropes and mats.",
      },
      {
        no: "No. 03",
        title: "Toddy Shop Fish Lunch",
        body: "Savor an authentic, spicy curry lunch of river pearl spot (karimeen) wrapped in banana leaves, served in a local backwater toddy shop.",
      },
    ],
    ctaBody: "Let's design a custom slow itinerary that takes you into the waterways of the lake.",
  },
  {
    slug: "fort-kochi",
    name: "Fort Kochi",
    heroImage: "/images/kochi-street.jpg",
    heroAlt: "Colonial architecture in Fort Kochi",
    heroQuote: "Spice, ink, and salt air.",
    kicker: "The Seaport",
    heading: "Colonial streets & art houses.",
    intro:
      "Fort Kochi is a historical water gate defined by Portuguese churches, Dutch mansions, Jewish antiquities, and traditional Chinese fishing nets. It has evolved into a vibrant contemporary art hub, hosting the Kochi-Muziris Biennale in old waterfront warehouses.",
    stats: [
      { label: "Altitude", value: "Sea Level" },
      { label: "Best Time", value: "October — April (Biennale season)" },
      { label: "Smell of the air", value: "Dry ginger, cloves, & salt breeze" },
    ],
    mapPaths: [
      "M40,150 C90,140 120,90 170,120 C220,150 280,180 340,140",
      "M20,120 C80,110 110,60 160,90 C210,120 270,150 330,110",
    ],
    mapMarkers: [
      { x: 110, y: 110, label: "Brunton Boatyard", variant: "brass" },
      { x: 190, y: 130, label: "Aspinwall House (Biennale)", variant: "brass" },
      { x: 290, y: 160, label: "Jew Town Synagogue", variant: "spice", align: "right" },
    ],
    stays: [
      {
        kicker: "Grand Harbor Heritage",
        name: "Brunton Boatyard / Fragrant Nature",
        body: "Restored premium properties situated along the harbor front. Enjoy rooms with harbor views, private balconies watching ships drift past, and historic colonial design elements.",
        features: "Features: Harbor view pools, colonial architecture, sea dinners",
      },
      {
        kicker: "Boutique Fort Stays",
        name: "Eighth Bastion / Fort Abode",
        body: "Comfortable boutique properties located in the heart of Fort Kochi's historic paths. Walk to the Chinese fishing nets, local spice markets, and art cafes.",
        features: "Features: Central location, courtyard pool, guided local tours",
      },
    ],
    experiences: [
      {
        no: "No. 01",
        title: "Aspinwall Biennale Art Walk",
        body: "A private walk with our art curators through Aspinwall House, a grand waterfront heritage warehouse complex hosting contemporary installations.",
      },
      {
        no: "No. 02",
        title: "Jew Town Historical Walk",
        body: "Join a local historian to walk the historic lanes of Jew Town, visiting the 1568 Synagogue and smelling ginger drying in old spice markets.",
      },
      {
        no: "No. 03",
        title: "Sunset Harbor Yacht Cruise",
        body: "A quiet evening cruise on a private classic wooden launch, drifting past the giant fishing nets and shipping lanes as the sun goes down.",
      },
    ],
    ctaBody: "Let's design a custom slow itinerary that takes you into the history of the spice port.",
  },
  {
    slug: "varkala",
    name: "Varkala",
    heroImage: "/images/fishermen.jpg",
    heroAlt: "Varkala beach sunset",
    heroQuote: "Cliffs above the Arabian Sea.",
    kicker: "The Coast",
    heading: "Laterite cliffs & black sands.",
    intro:
      "Varkala is famous for its unique geological formations: high red laterite cliffs that border the Arabian Sea, with fresh spring water trickling down to meet the black sand shores below. It is a spiritual harbor for yoga, meditation, and quiet coast retreats.",
    stats: [
      { label: "Altitude", value: "Sea Level" },
      { label: "Best Time", value: "October — March" },
      { label: "Smell of the air", value: "Salt water & Incense" },
    ],
    mapPaths: ["M70,30 C65,100 80,180 75,270", "M110,30 C105,100 120,180 115,270"],
    mapMarkers: [
      { x: 80, y: 70, label: "Kappil Lagoon", variant: "brass" },
      { x: 75, y: 150, label: "Papanasam Beach", variant: "brass" },
      { x: 130, y: 200, label: "Janardhana Temple", variant: "spice" },
    ],
    stays: [
      {
        kicker: "Authentic Ayurveda Village",
        name: "Somatheeram Ayurveda Village",
        body: "The world's first Ayurvedic resort, set in a peaceful garden on a hill overlooking the sea. Guest cottages feature traditional wood, eco-friendly materials, and complete wellness setups.",
        features: "Features: Traditional Ayurveda hospital, sea-facing yoga, herbal garden",
      },
      {
        kicker: "Cliffside Luxury Retreat",
        name: "Niraamaya Retreats Surya Samudra",
        body: "Overlooking the ocean from a cliffside position, this premium retreat features heritage cottages, an infinity pool carved into rock, and specialized Ayurvedic wellness centers.",
        features: "Features: Rock infinity pool, ocean view villas, private beach access",
      },
    ],
    experiences: [
      {
        no: "No. 01",
        title: "Sunset Meditation on Black Sand",
        body: "Join our yoga curator on the secluded black sand beaches of South Varkala for a slow sunset breathing and mindfulness practice.",
      },
      {
        no: "No. 02",
        title: "Kappil Lagoon Surf Sessions",
        body: "Where the lake meets the sea. Learn basic surfing or enjoy a quiet stand-up paddleboarding trip along the palm-fringed waters of Kappil.",
      },
      {
        no: "No. 03",
        title: "Kathakali Temple Evenings",
        body: "Witness traditional dance offerings held in the open-air courtyards of Janardhana Swami Temple, an ancient 2,000-year-old pilgrimage site.",
      },
    ],
    ctaBody: "Let's design a custom slow itinerary that takes you onto the red cliffs of the ocean.",
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    heroImage: "/images/nature-hero.jpg",
    heroAlt: "Wayanad rainforest canopy",
    heroQuote: "Forest, coffee, silence.",
    kicker: "The High Forests",
    heading: "Rainforests & coffee hills.",
    intro:
      "Wayanad lies high in the Western Ghats, defined by misty hills, ancient cave art, and old coffee estates. It is a sanctuary for travelers seeking deep forest solitude, wildlife encounters, and standard planter heritage.",
    stats: [
      { label: "Altitude", value: "700m — 2,100m" },
      { label: "Best Time", value: "October — May" },
      { label: "Smell of the air", value: "Coffee blossom & Damp Earth" },
    ],
    mapPaths: [
      "M60,180 C110,140 160,210 210,170 C260,130 310,190 360,150",
      "M30,150 C90,110 150,180 220,130 C290,80 330,150 390,110",
    ],
    mapMarkers: [
      { x: 130, y: 160, label: "Banasura Sagar", variant: "brass" },
      { x: 220, y: 130, label: "Edakkal Caves", variant: "brass" },
      { x: 290, y: 90, label: "Kabini Forest", variant: "spice", align: "right" },
    ],
    stays: [
      {
        kicker: "Eco Luxury Stays",
        name: "Forest Canopy / Vythiri Resort",
        body: "Experience the deep rainforest in absolute comfort. Nestled in a lush forest ravine, these eco-luxury cottages and treehouses offer private balconies and views of natural streams.",
        features: "Features: Treehouses, forest walks, natural streams",
      },
      {
        kicker: "Wilderness Retreats",
        name: "Wayanad Wild / 900 Kandi Forest Stay",
        body: "Immerse yourself in the mountain forests. Stay in rustic yet luxury forest cottages surrounded by rare flora and fauna, offering guided treks and birdwatching trails.",
        features: "Features: Forest canopy views, naturalist-guided treks",
      },
    ],
    experiences: [
      {
        no: "No. 01",
        title: "Edakkal Caves Petroglyphs",
        body: "A slow climb with our resident historian to view Neolithic rock engravings dating back over 6,000 years, inside a split-mountain cave.",
      },
      {
        no: "No. 02",
        title: "Banasura Sagar Bamboo Rafting",
        body: "Join local trackers for a peaceful bamboo rafting trip across the glass-like waters of Banasura Sagar, South India's largest earth dam.",
      },
      {
        no: "No. 03",
        title: "Kabini Forest Edge Watch",
        body: "A quiet jeep drive along the forested boundaries of Wayanad and Kabini, accompanied by naturalists tracking wild bison and leopards.",
      },
    ],
    ctaBody: "Let's design a custom slow itinerary that takes you into the deep forests of the Western Ghats.",
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((d) => d.slug);
}
