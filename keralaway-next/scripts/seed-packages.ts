/**
 * One-time content migration: inserts the existing journey packages'
 * real content (extracted from the old static HTML files) into Supabase.
 * Run with: npx tsx scripts/seed-packages.ts
 * Safe to re-run: upserts on slug.
 */
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../lib/supabase/types";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type SeedItineraryDay = {
  day_number: number;
  title: string;
  description?: string;
  highlights: string[];
  overnight_note?: string;
};

type SeedPackage = {
  slug: string;
  title: string;
  subtitle: string;
  hero_image_url: string;
  overview_heading: string;
  overview_body: string;
  duration_label: string;
  hotel_category?: string;
  tour_style?: string;
  visa_info?: string;
  best_season: string;
  currency: string;
  price_amount?: number;
  price_usd?: number;
  featured_order: number;
  is_published: boolean;
  inclusions: string[];
  exclusions: string[];
  itinerary_days: SeedItineraryDay[];
};

const packages: SeedPackage[] = [
  {
    slug: "romantic-escapes",
    title: "Romantic Escapes",
    subtitle:
      "A private, premium journey for couples through Kerala's heritage, mist-covered highlands and tranquil backwaters.",
    hero_image_url: "/images/houseboat-dusk.jpg",
    overview_heading: "A retreat written for two.",
    overview_body:
      "A romantic escape designed for couples seeking heritage charm, mountain serenity and lakeside luxury. Begin in the historic streets of Fort Kochi, continue through Munnar's tea plantations and forest landscapes, and conclude with a sunset backwater cruise and candlelit lakeside dinner in Kumarakom.\n\nFrom private airport transfers to curated experiences and romantic touches, every stay is designed to make your Kerala journey memorable.",
    duration_label: "5 Days / 4 Nights",
    hotel_category: "4-Star Heritage & Boutique Mountain / Lakeside Retreats",
    tour_style: "Romance, Highlands, Wildlife, Backwaters",
    best_season: "October — February",
    currency: "INR",
    price_amount: 100000,
    price_usd: 1050,
    featured_order: 1,
    is_published: true,
    inclusions: [
      "Heritage, boutique mountain and lakeside retreat stays throughout.",
      "Private airport transfers and private vehicle for all scheduled travel.",
      "Anakulam Jeep Safari experience.",
      "Sunset backwater cruise in Kumarakom.",
      "Romantic room setup and a candlelit lakeside dinner for two.",
    ],
    exclusions: [
      "International or domestic flights.",
      "Lunches and personal expenses throughout the journey.",
      "Optional add-ons such as additional candlelit dinners.",
      "Travel insurance.",
    ],
    itinerary_days: [
      {
        day_number: 1,
        title: "Fort Kochi Arrival",
        highlights: [
          "Private airport meet-and-greet",
          "Private transfer to Fort Kochi",
          "Heritage hotel check-in",
          "Breakfast, subject to arrival time and hotel arrangements",
          "Local sightseeing around Fort Kochi",
          "Lunch at guest's own expense",
          "Optional candlelit dinner available as an add-on",
        ],
      },
      {
        day_number: 2,
        title: "Into the Highlands",
        highlights: [
          "Breakfast at the hotel",
          "Early morning checkout and private transfer to Munnar",
          "Scenic drive through waterfalls and spice plantations, where available",
          "Photostops at picturesque tea valley viewpoints",
          "Lunch at guest's own expense",
          "Boutique mountain retreat check-in",
          "Guided tea plantation walking tour (2:30 PM – 5:30 PM)",
          "Evening at leisure",
        ],
      },
      {
        day_number: 3,
        title: "Anakulam Wilderness Escape",
        highlights: [
          "Breakfast at the retreat",
          "Relaxed morning at leisure",
          "Lunch at guest's own expense",
          "Anakulam Jeep Safari experience (approx. 2:30 PM – 8:30 PM)",
          "Explore forest landscapes and the natural beauty of the region",
          "Dinner at guest's own expense",
        ],
        overnight_note: "* Note: Wildlife sightings are not guaranteed.",
      },
      {
        day_number: 4,
        title: "Backwater Serenity",
        highlights: [
          "Breakfast at the retreat",
          "Hotel checkout and private transfer to Kumarakom",
          "Luxury lakeside retreat check-in",
          "Sunset backwater cruise",
          "Romantic room setup",
          "Special candlelit lakeside dinner for two",
        ],
      },
      {
        day_number: 5,
        title: "Departure",
        highlights: [
          "Relaxed breakfast",
          "Leisure by the lake, subject to departure time",
          "Hotel checkout",
          "Private airport transfer",
        ],
      },
    ],
  },
  {
    slug: "dubai-private-tour",
    title: "Dubai Private Tour",
    subtitle:
      "3 Nights • 4 Days of Arabian heritage, golden desert safaris, dhow cruising, and modern architectural marvels.",
    hero_image_url: "/images/dubai-hero.jpg",
    overview_heading: "The Arabian Chapter.",
    overview_body:
      "Experience the vibrant contrast of ancient Arabian spice traditions and futuristic skyscrapers with Keralaway's curated 4-Day Dubai Private Tour Package. Designed for travelers seeking complete comfort, privacy, and personal attention, every transfer is conducted in a private vehicle without shared guests.\n\nGlide along Dubai Creek on a traditional wooden dhow while dining under the stars, navigate historic souqs with a licensed local driver-cum-guide, conquer the golden dunes in a 4x4 desert safari with live cultural shows and a BBQ feast, and witness the floral wonders of the Dubai Miracle Garden.",
    duration_label: "3 Nights • 4 Days",
    hotel_category: "Ibis Styles or similar 3-Star (with daily breakfast)",
    tour_style: "Private vehicle — no shared guests",
    visa_info: "30-day tourist visa included",
    best_season: "October — April",
    currency: "INR",
    price_amount: 34500,
    price_usd: 420,
    featured_order: 2,
    is_published: true,
    inclusions: [
      "3 Nights Hotel Stay: In Ibis Styles or similar approved 3-star Dubai hotel with daily breakfast.",
      "30-Day UAE Tourist Visa: Single-entry tourist visa included (subject to immigration approval).",
      "Private Vehicle & Transfers: Private airport pick-up, drop-off, and private transportation for all scheduled itinerary activities — no shared guests.",
      "Dhow Cruise Dinner: Dubai Creek cruise with international buffet dinner, live entertainment, and private return transfers.",
      "Half-Day City Sightseeing: Private tour with licensed driver-guide (Abra ride, Gold & Spice Souqs, photo stops at Burj Khalifa, Burj Al Arab, Dubai Frame, Museum of the Future, Madinat Jumeirah, and Palm Jumeirah).",
      "Desert Safari & BBQ Dinner: 4x4 dune bashing, sandboarding, short camel ride, henna tattoo, soft drinks, starters, and BBQ dinner with Belly dance, Tanoura, and fire shows.",
      "Dubai Miracle Garden: Visit and private transfer included (subject to seasonal opening dates).",
    ],
    exclusions: [
      "International Flights: Airfares to and from Dubai.",
      "Lunches & Personal Expenses: Daily lunches, souvenirs, alcoholic beverages, and discretionary tips.",
      "Unspecified Entry Tickets: Tickets to internal observation decks (e.g., Burj Khalifa 'At the Top', Museum of the Future interior) unless requested as add-ons.",
      "Early Check-in / Late Checkout: Charges levied by hotels for non-standard arrival or departure timings.",
      "Tourism Dirham Fee: Standard Dubai municipality hotel tax (approx. AED 10–15 per room/night) payable directly at hotel check-in.",
      "Travel Insurance: Comprehensive medical and travel insurance (strongly recommended).",
    ],
    itinerary_days: [
      {
        day_number: 1,
        title: "Arrival & Dhow Cruise Dinner",
        description:
          "Private airport pickup upon arrival at Dubai International Airport (DXB) and comfortable transfer to your hotel. Settle in and relax before your evening excursion.",
        highlights: [
          "Private Hotel Pickup: Approximately 7:00–7:30 PM",
          "Dubai Creek Dhow Cruise: Cruising approximately 8:30–10:30 PM aboard a traditional illuminated wooden dhow",
          "Buffet Dinner & Shows: International buffet dinner with live cultural music and entertainment",
          "Private Hotel Return: Expected drop-off around 11:00 PM",
        ],
        overnight_note: "Overnight: Ibis Styles or similar 3-star Dubai hotel",
      },
      {
        day_number: 2,
        title: "Half-Day Private Dubai Sightseeing",
        description:
          "Following breakfast at the hotel, embark on a private morning journey through historic Old Dubai and modern icons with a licensed Dubai driver-cum-guide.",
        highlights: [
          "Heritage & Souqs: Traditional Abra boat crossing across Dubai Creek; Gold Souq and Spice Souq",
          "Landmark Photo Stops: Dubai Frame, Museum of the Future, Burj Khalifa, and Burj Al Arab",
          "Coastal & Island Drive: Madinat Jumeirah canals and a scenic drive through Palm Jumeirah",
          "Afternoon at Leisure: Drop-off back at your hotel around 1:00–1:30 PM",
        ],
        overnight_note: "Overnight: Ibis Styles or similar 3-star Dubai hotel",
      },
      {
        day_number: 3,
        title: "Desert Safari & BBQ Dinner",
        description:
          "Spend a relaxed morning at your hotel. In the afternoon, your 4x4 desert safari adventure begins as you head toward the red sand dunes of the Dubai desert.",
        highlights: [
          "Thrilling Dune Bashing: 4x4 dune drive with experienced safari drivers",
          "Sunset & Activities: Sunset photo stop, sandboarding, and a short camel ride",
          "Desert Camp Welcome: Soft drinks, Arabic coffee, dates, starters, and henna tattoo application",
          "BBQ Dinner & Live Shows: Belly dance, Tanoura spinning dance, and fire shows",
          "Hotel Return: Return transfer around 9:30 PM",
        ],
        overnight_note: "Overnight: Ibis Styles or similar 3-star Dubai hotel",
      },
      {
        day_number: 4,
        title: "Miracle Garden & Airport Departure",
        description:
          "Enjoy breakfast at the hotel and check out with all luggage. Your private chauffeur will take you on your final Dubai experience.",
        highlights: [
          "Dubai Miracle Garden: The world's largest natural flower garden",
          "Exploration Time: Approximately 2–3 hours to wander the flower-lined paths",
          "Private Airport Transfer: Direct transfer to Dubai International Airport (DXB)",
        ],
        overnight_note:
          "* Note: Dubai Miracle Garden is subject to seasonal opening dates (usually November to April).",
      },
    ],
  },
  {
    slug: "slow-kerala",
    title: "Slow Kerala Journeys",
    subtitle: "A village canoe through canals only the locals know.",
    hero_image_url: "/images/village-canoe.jpg",
    overview_heading: "Move at the speed of water.",
    overview_body:
      "The true backwaters of Kerala don't exist on standard maps. They are found in the narrow channels that cut through quiet coconut groves, where village life has remained unchanged for decades.\n\nOn this journey, you will avoid the commercial tourist centers. We take you to North Alleppey, staying in boutique heritage cottages run by local families. Travel by wooden canoe, visit coir spinners, share fish curry in toddy shacks, and learn how to paddle your own path. Nothing scripted, nothing rushed.",
    duration_label: "7 — 12 Nights",
    tour_style: "Village homestays, local craft",
    best_season: "October — May",
    currency: "INR",
    price_amount: 2950,
    price_usd: 2950,
    featured_order: 3,
    is_published: true,
    inclusions: [],
    exclusions: [],
    itinerary_days: [
      {
        day_number: 1,
        title: "Fort Kochi to Marari Coast",
        description:
          "Arrive in Kochi and drive south to the quiet fishing coast of Marari. Settle into your boutique beach cottages under the shade of mature palms. Spend the evening listening to the waves.",
        highlights: [],
      },
      {
        day_number: 2,
        title: "Weavers & Coastal Pathways",
        description:
          "Visit a small coir weaving cooperative to see how coconut husks are beaten, spun, and woven into durable mats. Explore the local temples on foot with a local guide.",
        highlights: [],
      },
      {
        day_number: 3,
        title: "Toddy and Tapioca",
        description:
          "Move inland to a canal-side homestay. Lunch at a local toddy shop, tasting spicy fish curry and tapioca washed down with fresh coconut toddy. In the afternoon, learn how to prepare traditional dishes.",
        highlights: [],
      },
      {
        day_number: 4,
        title: "Quiet Canals of Kuttanad",
        description:
          "Spend the morning on a non-motorized wooden canoe, gliding beneath low footbridges and through water canals only 4 feet wide. Watch farmers herding ducks and women washing rice.",
        highlights: [],
      },
      {
        day_number: 5,
        title: "Return and Depart",
        description:
          "A slow breakfast overlooking the lagoon. Bid farewell to your hosts and transfer back to Kochi for your onward flight.",
        highlights: [],
      },
    ],
  },
  {
    slug: "wellness-ayurveda",
    title: "Wellness & Ayurveda Retreat",
    subtitle: "A dedicated journey of healing and rejuvenation along Kumarakom and Varkala.",
    hero_image_url: "/images/ayurveda.jpg",
    overview_heading: "Rejuvenation and rest.",
    overview_body:
      "Ayurveda is not a spa therapy; it is a way of aligning with nature's seasons. This dedicated retreat splits your time between the peaceful backwaters of Kumarakom and the dramatic cliffs of Varkala.\n\nBegin your wellness journey in Kumarakom, starting with a deep diagnostic consultation with a traditional Ayurveda doctor. Spend your days practicing breathing and yoga, exploring herbal gardens, and undergoing authentic therapies. Then, travel to Varkala for ocean views, coastal spa sessions, and sunset mindfulness meditation by the Arabian Sea.",
    duration_label: "5 Days / 4 Nights",
    hotel_category:
      "Kumarakom Lake Resort / Coconut Lagoon / Somatheeram Ayurveda Village / Niraamaya Surya Samudra",
    tour_style: "Detox, Yoga, Coastal calm",
    best_season: "Year Round / Monsoons",
    currency: "INR",
    price_amount: 2450,
    price_usd: 2450,
    featured_order: 4,
    is_published: true,
    inclusions: [],
    exclusions: [],
    itinerary_days: [
      {
        day_number: 1,
        title: "Arrival & Ayurveda Consultation",
        description: "Travel Time: Kochi Airport → Kumarakom (Approx. 2–2.5 Hours)",
        highlights: [
          "Private airport welcome and transfer",
          "Check-in at Kumarakom lakeside wellness retreat",
          "In-depth diagnostic consultation with senior Ayurveda physician",
          "Customized wellness cuisine dinner",
          "Gentle evening breathing exercises under the stars",
        ],
      },
      {
        day_number: 2,
        title: "Lakeside Rejuvenation & Yoga",
        description: "Travel Time: No Major Travel",
        highlights: [
          "Sunrise yoga and guided meditation overlooking Kumarakom lake",
          "Personalized Ayurvedic detoxification & massage therapies",
          "Organic wellness lunch curated by the resort chef",
          "Guided walk through the retreat's herbal gardens",
          "Evening traditional music and light soup dinner",
        ],
      },
      {
        day_number: 3,
        title: "To the Varkala Red Cliffs",
        description: "Travel Time: Kumarakom → Varkala (Approx. 4–4.5 Hours)",
        highlights: [
          "Morning gentle yoga session and checkout",
          "Scenic drive south to the dramatic red cliffs of Varkala",
          "Check-in at cliffside wellness retreat with expansive ocean views",
          "Unwind with coastal walks and beach relaxation",
          "Sunset mindfulness meditation directly on the sand",
        ],
      },
      {
        day_number: 4,
        title: "Coastal Healing & Rest",
        description: "Travel Time: No Major Travel",
        highlights: [
          "Ocean-facing sunrise yoga and pranayama session",
          "Deep-tissue coastal spa therapies and mineral mud baths",
          "Leisure time for beach walks and swimming in clear waters",
          "Lifestyle review consultation for post-trip wellness routine",
          "Farewell organic wellness dinner overlooking the illuminated bay",
        ],
      },
      {
        day_number: 5,
        title: "Departure",
        description: "Travel Time: Varkala → Trivandrum Airport (Approx. 1–1.5 Hours)",
        highlights: [
          "Relaxed beachside breakfast",
          "Final lifestyle recommendations pack",
          "Private transfer to Trivandrum (Thiruvananthapuram) airport for departure",
        ],
      },
    ],
  },
  {
    slug: "kochi-stopovers",
    title: "Kochi Stopovers",
    subtitle: "Three slow days in the city of pepper, ink, and salt air.",
    hero_image_url: "/images/kochi-street.jpg",
    overview_heading: "Three slow days in the port.",
    overview_body:
      "Kochi is a historic trading city where Arab dhows, Portuguese galleons, Dutch merchants, and British planters all left their marks. Its colonial alleys contain Jewish synagogues, spice markets, and old warehouse art galleries.\n\nOur Kochi Stopovers are curated for travelers looking to spend a few slow days exploring this artistic seaport. We guide you to boutique stays in restored 18th-century townhouses, contemporary biennale hubs, and the slowest, most delicious dosa breakfasts you have ever taken.",
    duration_label: "3 Days / 2 Nights",
    hotel_category: "Eighth Bastion / Brunton Boatyard / Fort Abode / The Malabar House",
    tour_style: "History, Art galleries, Spice",
    best_season: "Year Round",
    currency: "INR",
    price_amount: 1100,
    price_usd: 1100,
    featured_order: 5,
    is_published: true,
    inclusions: [],
    exclusions: [],
    itinerary_days: [
      {
        day_number: 1,
        title: "Discover Historic Kochi",
        description: "Travel Time: Kochi Airport → Fort Kochi (Approx. 1 Hour)",
        highlights: [
          "Private airport welcome",
          "Boutique heritage hotel check-in",
          "Guided Fort Kochi walking tour",
          "Chinese fishing nets at sunset",
          "Dutch Cemetery & heritage streets",
          "Sunset by the waterfront",
          "Dinner at a heritage restaurant",
        ],
      },
      {
        day_number: 2,
        title: "Culture & Local Experiences",
        description: "Travel Time: No Major Travel",
        highlights: [
          "Mattancherry Palace visit",
          "Jewish Town exploration",
          "Spice market walk",
          "Traditional Kerala lunch",
          "Private Tuk-Tuk Heritage Experience",
          "Sunset harbour cruise",
          "Optional Kathakali performance",
        ],
      },
      {
        day_number: 3,
        title: "Departure",
        description: "Travel Time: Fort Kochi → Kochi Airport (Approx. 1 Hour)",
        highlights: ["Relaxed breakfast", "Leisure time for shopping", "Private airport transfer"],
      },
    ],
  },
  {
    slug: "nature-trails",
    title: "Nature Trails",
    subtitle: "Wild Kerala, moved through gently.",
    hero_image_url: "/images/nature-hero.jpg",
    overview_heading: "Walk inside one of the world's biodiverse hotspots.",
    overview_body:
      "The Western Ghats of Kerala form a mountain barrier covered in dense evergreen forests. It is one of the world's designated biodiversity hotspots, home to wild elephants, langurs, and rare orchids.\n\nWe travel through this wilderness gently, accompanied by local biosphere guides who grew up inside the forests. Spend your days walking beneath the giant canopy of Silent Valley, trekking through organic cardamom plantations, and floating down wilderness rivers on bamboo rafts. Stay in premium eco-lodges constructed of local timber and stone.",
    duration_label: "8 — 14 Nights",
    tour_style: "Forest canopy, spice treks, wildlife",
    best_season: "September — March",
    currency: "INR",
    price_amount: 3150,
    price_usd: 3150,
    featured_order: 6,
    is_published: true,
    inclusions: [],
    exclusions: [],
    itinerary_days: [
      {
        day_number: 1,
        title: "Arrival & Transit to Silent Valley",
        description:
          "Arrive at Kochi airport. Take a private transfer north to Silent Valley National Park, checking into a rustic luxury eco-lodge on the edge of the forest. Enjoy a quiet dinner by bonfire.",
        highlights: [],
      },
      {
        day_number: 2,
        title: "Silent Valley Canopy Walk",
        description:
          "Wake up to forest bird calls. A morning hike beneath massive mahogany and teak trees, guided by a local tribal tracker. Walk the elevated suspension bridges to view the forest canopy.",
        highlights: [],
      },
      {
        day_number: 3,
        title: "Munnar Cardamom Slopes",
        description:
          "Drive to the tea and spice hills of Munnar. Walk through organic pepper and cardamom gardens with a local planter, learning how spices are harvested and dried. Stay in a historic estate bungalow.",
        highlights: [],
      },
      {
        day_number: 4,
        title: "Periyar Bamboo Rafting",
        description:
          "Travel south to the Periyar Tiger Reserve. Join a day-long bamboo rafting and hiking trek. Drift past herds of wild elephants and gaur grazing on the grassy banks of the lake.",
        highlights: [],
      },
      {
        day_number: 5,
        title: "Return and Depart",
        description:
          "A slow morning breakfast in the forest. Private transfer back to Kochi airport for your flight home, carrying the smells of rain and fresh cardamom with you.",
        highlights: [],
      },
    ],
  },
  {
    slug: "cultural-immersions",
    title: "Cultural Immersions",
    subtitle: "Inside ritual, craft, and the living art forms of Kerala.",
    hero_image_url: "/images/theyyam.jpg",
    overview_heading: "Living traditions, not stage shows.",
    overview_body:
      "Kerala's sacred rituals are not tourist attractions. They are centuries-old acts of community devotion, kept alive by generations of artists. We do not stage these performances; we sit beside them.\n\nOn this journey, you will travel behind the scenes of local art schools. Watch Kathakali dancers apply green and red mineral paints for three hours before stepping onto the stage. Travel north to Kannur to witness Theyyam dancers dancing on embers in the courtyard of a village temple at 4am. Engage with local hosts who grew up inside these traditions.",
    duration_label: "6 — 10 Nights",
    tour_style: "Rituals, Kathakali, Theyyam",
    best_season: "October — April",
    currency: "INR",
    price_amount: 2800,
    price_usd: 2800,
    featured_order: 7,
    is_published: true,
    inclusions: [],
    exclusions: [],
    itinerary_days: [
      {
        day_number: 1,
        title: "Arrival & Fort Kochi Overview",
        description:
          "Arrive in Kochi and check into your boutique heritage townhouse. Walk the oceanfront at sunset to view the iconic Chinese fishing nets.",
        highlights: [],
      },
      {
        day_number: 2,
        title: "Kathakali Backstage Makeup",
        description:
          "Spend the afternoon at a traditional dance school. Sit with the performers as they spend hours applying complex mineral pigments and paper borders to their faces. Watch the ritual performance at dusk.",
        highlights: [],
      },
      {
        day_number: 3,
        title: "Kalaripayattu Martial Art",
        description:
          "Visit a traditional red-clay fighting pit (kalari) at dawn. Watch students practice Kalaripayattu, the world's oldest martial art, learning about dynamic postures and wooden weapons.",
        highlights: [],
      },
      {
        day_number: 4,
        title: "Theyyam Temples of Kannur",
        description:
          "Travel north by train to Kannur. Settle into a quiet beach house. In the evening, meet a Theyyam practitioner who explains the temple symbols and red face paint.",
        highlights: [],
      },
      {
        day_number: 5,
        title: "Dawn Theyyam Fire Dance",
        description:
          "Depart at 3:30am for a quiet village temple. Witness a Theyyam dancer dancing in coconut-leaf outfits over live coal beds as drums echo through the dark coconut groves. Return for a late breakfast.",
        highlights: [],
      },
    ],
  },
  {
    slug: "wayanad-unscripted",
    title: "Wayanad Unscripted",
    subtitle: "Rainforest trails, ancient traditions, and local life in the Western Ghats.",
    hero_image_url: "/images/nature-hero.jpg",
    overview_heading: "Bespoke forest retreats.",
    overview_body:
      "Venture into the misty highlands of Wayanad, where centuries-old forests meet tea and coffee estates. Stay at a tranquil nature retreat, hike into the deep 900 Kandi forest region, learn ancient forest knowledge from indigenous guides, and cook traditional meals with local families.\n\nFrom exploring hidden waterfalls and viewpoints to discovering pre-historic rock art in Edakkal Caves and experiencing farm-to-table hospitality, this slow-paced mountain journey is written for those looking to experience Kerala's wilderness unhurriedly.",
    duration_label: "5 Days / 4 Nights",
    hotel_category: "Forest Canopy / Vythiri Village Resort / Wayanad Wild / 900 Kandi Forest Stay",
    tour_style: "Forest trails, community culture, farms",
    best_season: "Year Round",
    currency: "INR",
    price_amount: 1750,
    price_usd: 1750,
    featured_order: 8,
    is_published: true,
    inclusions: [],
    exclusions: [],
    itinerary_days: [
      {
        day_number: 1,
        title: "Arrival in the Highlands",
        description: "Travel Time: Kozhikode Airport → Wayanad (Approx. 3 Hours)",
        highlights: [
          "Private airport welcome",
          "Scenic drive into the Western Ghats",
          "Check-in to a nature retreat",
          "Relaxed evening amidst nature",
          "Campfire dinner",
          "Overnight in Wayanad",
        ],
      },
      {
        day_number: 2,
        title: "Forest Trails & 900 Kandi",
        description: "Travel Time: Internal forest transfers",
        highlights: [
          "Journey into the 900 Kandi forest region",
          "Guided forest trail experience",
          "Explore hidden viewpoints and forest landscapes",
          "Nature photography opportunities",
          "Lunch amidst the hills",
          "Check-in to a forest resort in the 900 Kandi region",
          "Sunset overlooking the valley",
          "Overnight at 900 Kandi",
        ],
      },
      {
        day_number: 3,
        title: "Tribal Traditions & Local Life",
        description: "Travel Time: Internal transfers",
        highlights: [
          "Morning amidst the forests of 900 Kandi",
          "Responsible community-led cultural interaction",
          "Learn about local traditions and forest knowledge",
          "Traditional cooking and food experience",
          "Visit Edakkal Caves",
          "Leisure evening",
          "Overnight in Wayanad",
        ],
      },
      {
        day_number: 4,
        title: "The Spirit of Wayanad",
        description: "Travel Time: Local sightseeing",
        highlights: [
          "Wayanadan Pothum Kaal Experience",
          "Farm and countryside experiences",
          "Farm-to-table lunch",
          "Visit Banasura Sagar viewpoints",
          "Optional visit to Kuruva Island (subject to seasonal access)",
          "Farewell dinner",
          "Overnight in Wayanad",
        ],
      },
      {
        day_number: 5,
        title: "Departure",
        description: "Travel Time: Wayanad → Kozhikode Airport (Approx. 3 Hours)",
        highlights: ["Relaxed breakfast", "Airport transfer"],
      },
    ],
  },
  {
    slug: "malabar-trails",
    title: "Malabar Trails",
    subtitle: "The Soul of North Kerala — ritual, waterways, and ancient culinary traditions.",
    hero_image_url: "/images/theyyam.jpg",
    overview_heading: "Explore rural Malabar.",
    overview_body:
      "Journey into the soul of North Kerala, a region rich in cultural history, legendary hospitality, and untouched landscapes. Explore the heritage of Kozhikode and taste authentic Malabar biryani.\n\nWalk nature trails in Paithalmala, kayak through quiet mangrove backwaters, explore the sea-side Bekal Fort, and witness the mystical spirit of Theyyam and living temple traditions. This journey is designed for cultural explorers and food lovers who seek to experience a completely authentic side of Kerala.",
    duration_label: "5 Days / 4 Nights",
    hotel_category:
      "Taj Gateway / The Raviz Calicut / Stayvista Paithalmala / Bekal Fort Heritage Stay / The Malabar Beach Resort / South Gate Kannur",
    tour_style: "Theyyam, Kayaking, Malabar cuisine",
    best_season: "October — March",
    currency: "INR",
    price_amount: 1950,
    price_usd: 1950,
    featured_order: 9,
    is_published: true,
    inclusions: [],
    exclusions: [],
    itinerary_days: [
      {
        day_number: 1,
        title: "Welcome to Malabar",
        description: "Arrival: Kozhikode Airport | Travel Time: Airport → Kozhikode (Approx. 45 Minutes)",
        highlights: [
          "Private airport welcome",
          "Boutique hotel check-in",
          "Kozhikode heritage exploration",
          "Kozhikode Beach sunset experience",
          "Authentic Malabar Biryani Experience",
          "Overnight in Kozhikode",
        ],
      },
      {
        day_number: 2,
        title: "Highlands of North Kerala",
        description: "Travel Time: Kozhikode → Paithalmala (Approx. 3–4 Hours)",
        highlights: [
          "Scenic drive through rural Malabar",
          "Paithalmala Nature Trail",
          "Panoramic Western Ghats viewpoints",
          "Highland picnic experience",
          "Sunset amidst misty landscapes",
          "Overnight near Paithalmala",
        ],
      },
      {
        day_number: 3,
        title: "Hidden Waterways & Coastal Heritage",
        description: "Travel Time: Paithalmala → Payyannur → Bekal",
        highlights: [
          "Kovvai Kayal Kayaking Experience",
          "Explore tranquil waterways and mangroves",
          "Village life along the backwaters",
          "Traditional Lunch at Kanji Hut, Padanna",
          "Continue to Bekal",
          "Explore Bekal Fort",
          "Sunset overlooking the Arabian Sea",
          "Beachfront stay",
          "Overnight in Bekal",
        ],
      },
      {
        day_number: 4,
        title: "The Spirit of North Kerala",
        description: "Travel Time: Bekal → Parassinikadavu → Kannur (Approx. 1.5–2 Hours)",
        highlights: [
          "Early Morning Visit to Parassinikadavu Muthappan Temple",
          "Witness the living traditions of Muthappan and Thiruvappana",
          "Experience one of North Kerala's most distinctive cultural rituals",
          "Traditional local breakfast",
          "Scenic drive towards Kannur",
          "Theyyam Storytelling & Cultural Interpretation Session",
          "Witness The Spirit of Theyyam (subject to festival calendar)",
          "Farewell Malabar dinner",
          "Overnight in Kannur",
        ],
      },
      {
        day_number: 5,
        title: "Departure",
        description: "Travel Time: Kannur Airport (Approx. 45 Minutes)",
        highlights: ["Relaxed breakfast", "Airport transfer"],
      },
    ],
  },
  {
    slug: "family-private-journeys",
    title: "Family Private Journeys",
    subtitle: "A private journey written for families of all ages.",
    hero_image_url: "/images/village-canoe.jpg",
    overview_heading: "Bespoke family holidays.",
    overview_body:
      "Explore the beautiful scenery of Kerala with your loved ones on a private family journey. Spend your first night in the historic harbor city of Kochi. Then, take a scenic drive to the mist-covered tea gardens of Munnar, enjoying outdoor walks, estate picnics, and a cozy bonfire.\n\nNext, discover the wildlife and spice hills of Thekkady before ending your trip with a backwater village cruise and lakeside relaxation in Kumarakom. This itinerary is custom-crafted to ensure complete comfort, safety, and engagement for kids and parents alike.",
    duration_label: "6 Days / 5 Nights",
    hotel_category:
      "Taj Malabar Resort & Spa / Brunton Boatyard / SpiceTree Munnar / Elephant Court Thekkady / Kumarakom Lake Resort / Taj Kumarakom",
    tour_style: "Wildlife, Tea estates, Backwaters",
    best_season: "October — May",
    currency: "INR",
    price_amount: 2950,
    price_usd: 2950,
    featured_order: 10,
    is_published: true,
    inclusions: [],
    exclusions: [],
    itinerary_days: [
      {
        day_number: 1,
        title: "Welcome to Kerala",
        description: "Travel Time: Kochi Airport → Kochi (Approx. 45–60 Minutes)",
        highlights: [
          "Private airport welcome",
          "Family-friendly hotel check-in",
          "Relaxed evening",
          "Local dining experience",
          "Leisure time after arrival",
        ],
      },
      {
        day_number: 2,
        title: "Scenic Highlands of Munnar",
        description: "Travel Time: Kochi → Munnar (Approx. 4.5–5 Hours)",
        highlights: [
          "Scenic drive through waterfalls and spice plantations",
          "Tea garden viewpoints",
          "Family resort check-in",
          "Leisure time amidst the hills",
          "Bonfire evening (weather permitting)",
        ],
      },
      {
        day_number: 3,
        title: "Tea Hills & Family Adventures",
        description: "Travel Time: No Major Travel",
        highlights: [
          "Nature walks through tea estates",
          "Tea museum visit",
          "Child-friendly outdoor activities",
          "Family Picnic in the Tea Gardens",
          "Optional cultural performance",
          "Leisure time at the resort",
        ],
      },
      {
        day_number: 4,
        title: "Wildlife & Spice Country",
        description: "Travel Time: Munnar → Thekkady (Approx. 3 Hours)",
        highlights: [
          "Scenic transfer to Thekkady",
          "Spice plantation experience",
          "Interactive Spice Discovery Session",
          "Optional boat safari on Periyar Lake",
          "Forest-side stay",
        ],
      },
      {
        day_number: 5,
        title: "Kerala Backwaters",
        description: "Travel Time: Thekkady → Kumarakom (Approx. 4 Hours)",
        highlights: [
          "Transfer to Kumarakom",
          "Lakeside resort or private houseboat experience",
          "Village Backwater Cruise",
          "Traditional Kerala snack experience",
          "Sunset by the lake",
        ],
      },
      {
        day_number: 6,
        title: "Departure",
        description: "Travel Time: Kumarakom → Kochi Airport (Approx. 2–2.5 Hours)",
        highlights: ["Relaxed breakfast", "Leisure by the lake", "Private airport transfer"],
      },
    ],
  },
];

async function seed() {
  for (const p of packages) {
    const { itinerary_days, ...packageFields } = p;

    const { data: existing } = await supabase
      .from("packages")
      .select("id")
      .eq("slug", p.slug)
      .maybeSingle();

    let packageId: string;

    if (existing) {
      const { error } = await supabase
        .from("packages")
        .update(packageFields)
        .eq("id", existing.id);
      if (error) throw error;
      packageId = existing.id;
      await supabase.from("itinerary_days").delete().eq("package_id", packageId);
    } else {
      const { data, error } = await supabase
        .from("packages")
        .insert(packageFields)
        .select("id")
        .single();
      if (error) throw error;
      packageId = data.id;
    }

    if (itinerary_days.length > 0) {
      const { error } = await supabase.from("itinerary_days").insert(
        itinerary_days.map((d) => ({
          package_id: packageId,
          day_number: d.day_number,
          title: d.title,
          description: d.description ?? null,
          highlights: d.highlights,
          overnight_note: d.overnight_note ?? null,
        }))
      );
      if (error) throw error;
    }

    console.log(`Seeded: ${p.title} (${p.slug})`);
  }

  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
