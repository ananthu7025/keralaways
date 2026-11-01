import Image from "next/image";
import Link from "next/link";
import { getPublishedPackages } from "@/lib/packages";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PackageCard from "@/components/journeys/PackageCard";
import InquiryForm from "@/components/forms/InquiryForm";
import HomeHeroTitle from "@/components/home/HomeHeroTitle";

export const revalidate = 60;

export default async function HomePage() {
  const packages = await getPublishedPackages();

  return (
    <>
      <Header />
      <main className="bg-paper text-ink overflow-x-hidden">
        {/* ── HERO ── */}
        <section
          id="top"
          className="relative h-screen min-h-[720px] w-full overflow-hidden bg-night"
        >
          <div className="absolute inset-0 will-change-transform">
            <Image
              src="/images/hero-backwaters.jpg"
              alt="Dawn mist rising over Kerala backwaters with a single houseboat"
              fill
              priority
              className="ken-burns object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-night/30 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-12 py-32 md:py-24">
            <div />
            <div className="max-w-3xl">
              <HomeHeroTitle />
              <p className="mt-8 font-display italic text-paper/85 text-2xl md:text-3xl max-w-xl leading-snug">
                Thoughtfully curated journeys.
              </p>
            </div>
            <div className="flex items-end justify-between gap-6">
              <div className="text-paper/60 small-caps">N 9.9&deg; &middot; E 76.3&deg;</div>
              <div className="flex flex-col items-center gap-3 text-paper/70">
                <div className="h-12 w-px bg-paper/40 animate-pulse" />
                <span className="small-caps" style={{ fontSize: "0.65rem" }}>
                  Scroll Slowly
                </span>
              </div>
              <div className="text-paper/60 small-caps hidden md:block">Vol. I &middot; MMXXVI</div>
            </div>
          </div>
        </section>

        {/* ── OPENING STORY ── */}
        <section id="story" className="relative py-32 md:py-48 px-6 md:px-12">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 md:col-start-1 reveal">
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/tea-portrait.jpg"
                  alt="A tea worker in the misty hills of Munnar"
                  width={1024}
                  height={1408}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-hand text-spice text-xl mt-4" style={{ transform: "rotate(-1deg)" }}>
                &mdash; Lakshmi, 26 years on the Munnar slopes
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7 reveal">
              <p className="small-caps text-spice mb-8">Chapter One &mdash; The Invitation</p>
              <h2 className="editorial-headline text-ink text-5xl md:text-7xl mb-10">
                Some places are <em className="editorial-italic">visited</em>.
                <br />
                Kerala is <em className="editorial-italic">experienced</em>.
              </h2>
              <div className="font-display text-xl md:text-2xl leading-relaxed text-ink/80 space-y-6 max-w-xl">
                <p>
                  Through mist-covered tea hills, centuries-old traditions, quiet backwaters and
                  meals shared with strangers who become family &mdash; every journey here unfolds
                  slowly.
                </p>
                <p className="text-ink/60 text-lg italic">
                  We don&rsquo;t sell tours. We design afternoons, mornings, and small unrepeatable
                  moments.
                </p>
              </div>
              <div className="rule-divider mt-12 w-24" />
            </div>
          </div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <div
          className="overflow-hidden border-t border-b border-ink/10 py-[14px] bg-ink select-none"
          aria-hidden="true"
        >
          <div className="marquee-track flex items-center gap-0" style={{ width: "max-content" }}>
            {[0, 1].map((i) => (
              <span
                key={i}
                className="flex items-center gap-10 pr-10 small-caps text-paper/50"
                style={{ fontSize: "0.68rem" }}
              >
                {[
                  "Alleppey",
                  "Munnar",
                  "Wayanad",
                  "Theyyam",
                  "Varkala",
                  "Kathakali",
                  "Fort Kochi",
                  "Kalaripayattu",
                  "Backwaters",
                  "Ayurveda",
                  "Monsoon",
                  "Malabar",
                  "Palakkad",
                  "Kettuvallam",
                ].map((word) => (
                  <span key={word} className="flex items-center gap-10">
                    <span>{word}</span>
                    <span className="text-brass">&middot;</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ── WHY TRAVEL WITH US ── */}
        <section className="py-24 bg-paper px-6 md:px-12 border-b border-ink/10">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
              <div className="lg:col-span-5 reveal">
                <p className="small-caps text-spice mb-4">Why Travel With Us</p>
                <h2 className="editorial-headline text-ink text-5xl md:text-7xl leading-tight">
                  Meaningful journeys designed with local expertise, authenticity, and care.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 reveal">
                <p className="font-display text-xl text-ink/75 leading-relaxed">
                  We believe travel should be slow, intentional, and deeply personal. Every detail
                  of our private travel experiences is curated to reveal the true heart of Kerala.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {[
                {
                  n: "01",
                  title: "Thoughtfully Curated Journeys",
                  body: "Every itinerary is carefully designed to balance comfort, authenticity, and meaningful experiences, ensuring that no two journeys feel the same.",
                  delay: 0,
                },
                {
                  n: "02",
                  title: "Local Expertise",
                  body: "Born and raised in Kerala, we combine local knowledge with tourism expertise to create journeys that go beyond the usual tourist trail.",
                  delay: 80,
                },
                {
                  n: "03",
                  title: "Handpicked Stays",
                  body: "From boutique heritage hotels and forest retreats to premium wellness resorts, every stay is selected for its character, quality, and guest experience.",
                  delay: 160,
                },
                {
                  n: "04",
                  title: "Authentic Local Experiences",
                  body: "From Theyyam and Muthappan traditions to tea plantations, spice trails, kayaking adventures, and village encounters, our experiences connect travelers with the real Kerala.",
                  delay: 0,
                },
                {
                  n: "05",
                  title: "Seamless Private Travel",
                  body: "From airport arrival to departure, we manage every detail with private transportation, dedicated support, and personalized service.",
                  delay: 80,
                },
                {
                  n: "06",
                  title: "Private Travel with Purpose",
                  body: "Our journeys are designed not only to showcase destinations but to create meaningful memories and genuine connections with Kerala's people, culture, and natural heritage.",
                  delay: 160,
                },
              ].map((point) => (
                <div
                  key={point.n}
                  className="border-t border-ink/20 pt-8 reveal"
                  style={point.delay ? { transitionDelay: `${point.delay}ms` } : undefined}
                >
                  <span className="font-display italic text-brass text-2xl">{point.n}</span>
                  <h3 className="font-display text-2xl text-ink mt-3 mb-4">{point.title}</h3>
                  <p className="text-ink/70 leading-relaxed text-sm">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOURNEY COLLECTIONS ── */}
        <section id="journeys" className="relative bg-mist/40 py-24 md:py-32">
          <div className="px-6 md:px-12 mb-20">
            <div className="mx-auto max-w-[1400px] flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="small-caps text-spice mb-4">Volume Two</p>
                <h2 className="editorial-headline text-ink text-5xl md:text-7xl max-w-3xl">
                  Journey <em className="editorial-italic">Collections</em>
                </h2>
              </div>
              <p className="font-display italic text-ink/60 text-lg max-w-xs">
                Not tours. Chapters &mdash; each written for one traveller, once.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 pt-8 pb-4">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="small-caps text-spice text-sm tracking-widest font-medium">
                  Part I &mdash; Curated Packages
                </span>
                <div className="flex-1 h-[1px] bg-ink/15" />
              </div>
            </div>

            {packages.length === 0 ? (
              <p className="px-6 md:px-12 text-ink/50 font-display italic">
                New journeys are being written. Check back soon.
              </p>
            ) : (
              packages.map((pkg, i) => <PackageCard key={pkg.id} pkg={pkg} index={i} />)
            )}
          </div>
        </section>

        {/* ── SEASONS ── */}
        <section id="seasons" className="relative py-24 md:py-32 bg-paper">
          <div className="px-6 md:px-12 mb-16">
            <div className="mx-auto max-w-[1400px]">
              <p className="small-caps text-spice mb-4">Volume Three</p>
              <h2 className="editorial-headline text-ink text-5xl md:text-7xl">
                Kerala, through the <em className="editorial-italic">seasons</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div
              className="relative flex flex-col justify-between p-10 md:p-12 border-t border-ink/10 md:border-t-0 reveal"
              style={{
                minHeight: "70vh",
                background:
                  "linear-gradient(to bottom right,color-mix(in oklch,var(--color-brass) 30%,transparent),color-mix(in oklch,var(--color-coconut) 30%,transparent),var(--color-paper))",
              }}
            >
              <div>
                <p className="small-caps text-spice mb-6">March &mdash; May</p>
                <h3 className="editorial-headline text-ink text-5xl md:text-6xl mb-2">Summer.</h3>
                <p className="font-display italic text-2xl text-spice">&mdash; Stillness</p>
              </div>
              <p className="font-display text-ink/80 text-lg leading-relaxed mt-12 max-w-xs">
                The state slows. Coastal afternoons spent in mango shade, dawn walks before the
                heat. The light is honey, the sea is silver.
              </p>
            </div>
            <div
              className="relative flex flex-col justify-between p-10 md:p-12 border-t border-ink/10 md:border-t-0 md:border-l border-ink/10 reveal"
              style={{
                minHeight: "70vh",
                background:
                  "linear-gradient(to bottom right,color-mix(in oklch,var(--color-moss-deep) 30%,transparent),color-mix(in oklch,var(--color-moss) 20%,transparent),color-mix(in oklch,var(--color-mist) 40%,transparent))",
              }}
            >
              <div>
                <p className="small-caps text-moss-deep mb-6">June &mdash; September</p>
                <h3 className="editorial-headline text-ink text-5xl md:text-6xl mb-2">Monsoon.</h3>
                <p className="font-display italic text-2xl text-moss-deep">&mdash; Awakening</p>
              </div>
              <p className="font-display text-ink/80 text-lg leading-relaxed mt-12 max-w-xs">
                The land exhales. Rivers fill, the green deepens to ink. Old healers say this is
                the only season worth being treated in. We agree.
              </p>
            </div>
            <div
              className="relative flex flex-col justify-between p-10 md:p-12 border-t border-ink/10 md:border-t-0 md:border-l border-ink/10 reveal"
              style={{
                minHeight: "70vh",
                background:
                  "linear-gradient(to bottom right,color-mix(in oklch,var(--color-stone) 30%,transparent),color-mix(in oklch,var(--color-mist) 40%,transparent),var(--color-paper))",
              }}
            >
              <div>
                <p className="small-caps text-stone mb-6">October &mdash; February</p>
                <h3 className="editorial-headline text-ink text-5xl md:text-6xl mb-2">Winter.</h3>
                <p className="font-display italic text-2xl text-stone">&mdash; Clarity</p>
              </div>
              <p className="font-display text-ink/80 text-lg leading-relaxed mt-12 max-w-xs">
                Mornings cool enough for a shawl in Munnar. Festival lamps in every village. The
                backwaters are glass; the tea hills are sharp against the sky.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOOD JOURNAL ── */}
        <section
          id="food"
          className="relative bg-coconut/30 py-24 md:py-32 px-6 md:px-12 overflow-hidden"
        >
          <div className="absolute inset-0 paper-grain pointer-events-none" />
          <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5 reveal">
              <p className="small-caps text-spice mb-4">Field Notes</p>
              <h2 className="editorial-headline text-ink text-5xl md:text-6xl mb-8">
                From the <em className="editorial-italic">kitchen</em>, slowly.
              </h2>
              <p className="font-display text-ink/80 text-lg leading-relaxed mb-6">
                Kerala&rsquo;s table is not one cuisine but three &mdash; written in coconut,
                tamarind, and the unhurried hand of grandmothers.
              </p>
              <p className="font-hand text-spice text-2xl mt-8" style={{ transform: "rotate(-1deg)" }}>
                &ldquo;Cooking, like a temple, must take its time.&rdquo;
              </p>
              <p className="small-caps mt-2 text-ink/50 mb-8">
                &mdash; overheard in a Travancore kitchen
              </p>
              <div className="border-t border-ink/20 pt-6">
                <p className="text-ink/75 leading-relaxed text-sm">
                  At the center of every kitchen lies the spice chest &mdash; a fragrant map of the
                  land. The green cardamom from Munnar&rsquo;s high hills, the black pepper from
                  Malabar&rsquo;s coastal rain, and the wild ginger drying in courtyard suns. These
                  raw spices are the alphabets with which our culinary stories are written.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 reveal">
              <div className="overflow-hidden">
                <Image
                  src="/images/food-spices.jpg"
                  alt="Kerala spices and ingredients on a banana leaf"
                  width={1408}
                  height={1024}
                  className="w-full object-cover"
                  style={{ height: "110%", marginTop: "-5%" }}
                />
              </div>
            </div>

            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 reveal">
              <div className="border-t border-ink/30 pt-6">
                <p className="small-caps text-spice mb-3">Pepper coast, biryani country</p>
                <h4 className="font-display text-3xl text-ink mb-3">Malabar</h4>
                <p className="text-ink/75 leading-relaxed">
                  Where Arab dhows once moored. Slow-cooked meats, thalassery biryani,
                  banana-leaf parottas torn by hand.
                </p>
              </div>
              <div className="border-t border-ink/30 pt-6">
                <p className="small-caps text-spice mb-3">Coconut, tamarind, restraint</p>
                <h4 className="font-display text-3xl text-ink mb-3">Travancore</h4>
                <p className="text-ink/75 leading-relaxed">
                  The royal kitchen. Avial, olan, the precise sourness of kalan. Cooking that
                  whispers, never shouts.
                </p>
              </div>
              <div className="border-t border-ink/30 pt-6">
                <p className="small-caps text-spice mb-3">Backwater catch, daily rice</p>
                <h4 className="font-display text-3xl text-ink mb-3">Central Kerala</h4>
                <p className="text-ink/75 leading-relaxed">
                  Karimeen on banana leaves. Toddy-shop fish curries. The simplest meal eaten with
                  the most attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CULTURE (dark) ── */}
        <section className="relative bg-night text-paper py-32 md:py-44 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/temple-lamps.jpg"
              alt="Temple oil lamps at dusk"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-night via-night/70 to-night" />
          </div>

          <div className="relative px-6 md:px-12 reveal">
            <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-6">
                <p className="small-caps text-brass mb-6">A Room of Living Tradition</p>
                <h2 className="editorial-headline text-paper text-6xl md:text-8xl">
                  The <em className="editorial-italic text-brass">sacred</em>,
                  <br />
                  still <em className="editorial-italic">moving</em>.
                </h2>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <p className="font-display text-paper/80 text-xl leading-relaxed">
                  Theyyam. Kathakali. Kalaripayattu. Festivals of fire, oil, and brass that have
                  not paused in eight hundred years. We do not stage them. We sit beside them.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 mt-24">
              <figure className="col-span-12 md:col-span-7">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/images/theyyam.jpg"
                    alt="A Theyyam performer being painted before dawn"
                    fill
                    className="pimg object-cover"
                  />
                </div>
                <figcaption className="small-caps text-paper/60 mt-4">
                  Plate I &mdash; Theyyam preparation, Kannur district, 04:12
                </figcaption>
              </figure>
              <figure className="col-span-12 md:col-span-4 md:col-start-9 md:mt-32">
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/fishermen.jpg"
                    alt="Chinese fishing nets at sunset in Fort Kochi"
                    fill
                    className="pimg object-cover"
                  />
                </div>
                <figcaption className="small-caps text-paper/60 mt-4">
                  Plate II &mdash; The cheena vala at low tide
                </figcaption>
              </figure>
            </div>

            <div className="mx-auto max-w-[1400px] mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ["01", "Theyyam"],
                ["02", "Kathakali"],
                ["03", "Kalaripayattu"],
                ["04", "Boat Races"],
              ].map(([n, label]) => (
                <div key={n} className="border-t border-brass/40 pt-4">
                  <p className="small-caps text-brass/70">No. {n}</p>
                  <p className="font-display text-paper text-2xl mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESTINATIONS ── */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 bg-paper">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 items-end">
              <div className="md:col-span-7 reveal">
                <p className="small-caps text-spice mb-4">A Working Atlas</p>
                <h2 className="editorial-headline text-ink text-5xl md:text-7xl">
                  Places we <em className="editorial-italic">return</em> to.
                </h2>
              </div>
              <p className="md:col-span-4 md:col-start-9 font-display italic text-ink/60 text-lg reveal">
                Munnar, Wayanad, Alleppey, Varkala, Thrissur &mdash; each a chapter of its own.
              </p>
            </div>

            {/* Featured: Munnar */}
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch mb-24 reveal">
              <div className="md:col-span-7 relative overflow-hidden" style={{ minHeight: "400px" }}>
                <Image
                  src="/images/village-canoe.jpg"
                  alt="Misty morning on a Kerala backwater village"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-5 flex flex-col justify-between bg-mist/50 p-10 md:p-12">
                <div>
                  <p className="small-caps text-spice mb-4">Featured Destination</p>
                  <h3 className="editorial-headline text-ink text-6xl md:text-7xl mb-6">Munnar</h3>
                  <p className="font-display italic text-ink/70 text-xl mb-8 leading-snug">
                    &ldquo;To wake here is to wake inside a cloud.&rdquo;
                  </p>
                  <p className="text-ink/75 leading-relaxed">
                    Twelve hundred metres above the coast, where the air smells of cardamom and
                    the hills turn from green to grey to gold between morning and noon. Stay in a
                    bungalow once owned by a Scottish planter; wake before the mist lifts.
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <span className="small-caps text-ink/60">Idukki District &middot; 1600m</span>
                  <Link
                    href="/destinations/munnar"
                    className="small-caps border-b border-ink/40 pb-1 hover:border-brass hover:text-brass transition-colors"
                  >
                    Plan a visit
                  </Link>
                </div>
              </div>
            </article>

            {/* Smaller grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  slug: "wayanad",
                  title: "Wayanad",
                  image: "/images/tea-portrait.jpg",
                  no: "No. 02",
                  caption: "Forest, coffee, silence",
                  delay: 0,
                },
                {
                  slug: "varkala",
                  title: "Varkala",
                  image: "/images/fishermen.jpg",
                  no: "No. 03",
                  caption: "Cliffs above the Arabian Sea",
                  delay: 80,
                },
                {
                  slug: "fort-kochi",
                  title: "Fort Kochi",
                  image: "/images/kochi-street.jpg",
                  no: "No. 04",
                  caption: "Spice, ink, and salt air",
                  delay: 160,
                },
              ].map((dest) => (
                <article
                  key={dest.slug}
                  className="group reveal"
                  style={dest.delay ? { transitionDelay: `${dest.delay}ms` } : undefined}
                >
                  <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "4/5" }}>
                    <Link href={`/destinations/${dest.slug}`}>
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        fill
                        className="object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-ink/30 pb-3">
                    <h4 className="font-display text-3xl text-ink">
                      <Link href={`/destinations/${dest.slug}`} className="hover:text-brass transition-colors">
                        {dest.title}
                      </Link>
                    </h4>
                    <span className="font-display italic text-brass">{dest.no}</span>
                  </div>
                  <p className="small-caps text-ink/60 mt-3">{dest.caption}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOURNAL ── */}
        <section id="journal" className="relative bg-paper py-24 md:py-32 px-6 md:px-12 border-t border-ink/15">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
              <h2 className="editorial-headline text-ink text-5xl md:text-7xl reveal">
                The <em className="editorial-italic">Journal</em>
              </h2>
              <p className="small-caps text-ink/60 reveal">Issue 04 &middot; Spring</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
              {[
                {
                  slug: "theyyam-dancers",
                  kicker: "Photo Story",
                  title: "A morning with the Theyyam dancers of Kannur",
                  byline: "Aravind Menon · May 2026",
                  delay: 0,
                },
                {
                  slug: "best-meal",
                  kicker: "Food Chronicle",
                  title: "Why the best meal in Kerala is eaten standing up",
                  byline: "Anjali R. · April 2026",
                  delay: 60,
                },
                {
                  slug: "houseboat-captain",
                  kicker: "Local Voice",
                  title: "Letters from a houseboat captain, second-generation",
                  byline: "Thomas K. · March 2026",
                  delay: 120,
                },
                {
                  slug: "monsoon-medicine",
                  kicker: "Travel Essay",
                  title: "The monsoon as medicine — three weeks in Palakkad",
                  byline: "Dr. Saira George · February 2026",
                  delay: 180,
                },
              ].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-6 border-t border-ink/30 py-8 hover:bg-mist/30 transition-colors reveal"
                  style={post.delay ? { transitionDelay: `${post.delay}ms` } : undefined}
                >
                  <div className="flex-1">
                    <p className="small-caps text-spice mb-3">{post.kicker}</p>
                    <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-brass transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-display italic text-ink/60 mt-3">{post.byline}</p>
                  </div>
                  <span className="small-caps text-ink/40 group-hover:text-brass transition-colors hidden md:inline">
                    Read &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT INVITATION ── */}
        <section
          id="contact"
          className="relative bg-moss-deep text-paper py-28 md:py-40 px-6 md:px-12 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brass/20 blur-3xl lamp-glow pointer-events-none" />
          <div className="relative mx-auto max-w-[1100px]">
            <p className="small-caps text-brass mb-6 reveal">An Invitation</p>
            <h2 className="editorial-headline text-paper text-5xl md:text-7xl mb-10 max-w-3xl reveal">
              Let&rsquo;s design your <em className="editorial-italic text-brass">Kerala</em> journey.
            </h2>
            <p className="font-display text-paper/80 text-xl max-w-2xl mb-16 reveal">
              Tell us a little. We&rsquo;ll write back within a day &mdash; not with a brochure, but
              with a few honest questions and the beginnings of a route only for you.
              <span className="block mt-4 text-sm font-sans text-brass/90 small-caps tracking-wider">
                Or reach out directly:{" "}
                <a href="tel:+919292125237" className="underline hover:text-paper transition-colors font-semibold">
                  +91 9292125237
                </a>{" "}
                &bull;{" "}
                <a
                  href="https://wa.me/919292125237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-paper transition-colors font-semibold"
                >
                  WhatsApp
                </a>{" "}
                &bull;{" "}
                <a
                  href="mailto:info@keralaway.com"
                  className="underline hover:text-paper transition-colors font-semibold"
                >
                  info@keralaway.com
                </a>
              </span>
            </p>

            <div className="border-t border-paper/20 pt-12 max-w-3xl reveal">
              <InquiryForm variant="dark" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
