import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us — Keralaway",
  description:
    "The story of a boutique design studio of nine in Fort Kochi, crafting slow travel experiences through Kerala.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-paper text-ink overflow-x-hidden">
        {/* ── HERO ── */}
        <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-night flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/about-studio.jpg"
              alt="Keralaway Design Studio"
              fill
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/60 to-night" />
          </div>
          <div className="relative z-10 max-w-4xl px-6 md:px-12 mt-20">
            <p className="small-caps text-brass mb-4">&mdash; Inside the Studio</p>
            <h1 className="editorial-headline text-paper text-6xl md:text-8xl leading-none">
              A studio of <em className="editorial-italic text-brass">nine</em>, based in Fort
              Kochi.
            </h1>
          </div>
        </section>

        {/* ── INTRODUCTION ── */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-coconut/10 relative overflow-hidden border-b border-ink/10">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 reveal">
              <p className="small-caps text-spice mb-4">Our Belief</p>
              <h2 className="editorial-headline text-ink text-4xl md:text-6xl mb-8 leading-tight">
                Memories in the <em className="editorial-italic">connections</em>, not the miles.
              </h2>
            </div>
            <div className="md:col-span-7 font-display text-xl md:text-2xl leading-relaxed text-ink/80 space-y-6 reveal">
              <p className="font-semibold text-ink">
                At Keralaway Tours, we believe the most memorable journeys are not measured by the
                number of places visited, but by the stories experienced and the connections made
                along the way.
              </p>
              <p className="text-lg text-ink/85">
                Rooted in Kerala and guided by local expertise, we create private travel
                experiences that combine authentic culture, breathtaking landscapes, meaningful
                encounters, and personalized service.
              </p>
              <p className="text-lg text-ink/85">
                From the mist-covered tea plantations of Munnar and the tranquil backwaters of
                Alleppey to the vibrant traditions of Malabar and the heritage streets of Kochi,
                every journey is thoughtfully designed around the interests, pace, and preferences
                of each traveler.
              </p>
            </div>
          </div>
        </section>

        {/* ── STORY & FOUNDING ── */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 bg-paper">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 reveal">
              <p className="small-caps text-spice mb-4">The Origin</p>
              <h2 className="editorial-headline text-ink text-4xl md:text-6xl mb-8">
                Born in the mist, built in the salt air.
              </h2>
              <p className="font-hand text-spice text-3xl mt-4" style={{ transform: "rotate(-1deg)" }}>
                &mdash; George K., Founder
              </p>
            </div>
            <div className="md:col-span-7 font-display text-xl leading-relaxed text-ink/80 space-y-6 reveal">
              <p className="blog-dropcap">
                Keralaway began in the high slopes of Munnar, where the air was cardamom and the
                hills was mist. George, a third-generation planter, realized that travelers were
                speeding through his home in air-conditioned buses, checking items off list boxes,
                and returning home with photos but no stories.
              </p>
              <p>
                In 2018, he left the plantation and moved to an old spice warehouse on Princess
                Street in Fort Kochi. He brought together writer friends, local hosts, and
                old-school sailors to build a slow travel design house. Today, we are nine
                designers, writers, and logistic navigators operating from that same sunlit
                warehouse.
              </p>
              <p>
                We do not build mass itineraries. We curate quiet afternoons. We match you with
                families who feed you, boat captains who guide you through hidden streams, and
                Vaidyas who recommend herbs according to the monsoon rains.
              </p>
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-24 bg-mist/30 px-6 md:px-12 border-t border-b border-ink/10">
          <div className="mx-auto max-w-[1200px]">
            <h3 className="editorial-headline text-center text-5xl md:text-7xl text-ink mb-8">
              Our <em className="editorial-italic">Philosophy</em>
            </h3>
            <p className="font-display italic text-center text-xl md:text-2xl text-ink/80 max-w-3xl mx-auto mb-16 leading-relaxed reveal">
              &ldquo;Travel should inspire curiosity, create genuine connections, and leave lasting
              memories. Every journey we design is crafted with this purpose in mind.&rdquo;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="border-t border-brass/50 pt-8 reveal">
                <span className="small-caps text-brass">Authentic Experiences</span>
                <h4 className="font-display text-2xl text-ink mt-3 mb-4">Discover the Soul</h4>
                <p className="text-ink/70 leading-relaxed">
                  Discover Kerala through its people, traditions, cuisine, and culture with
                  carefully curated experiences that go beyond the ordinary.
                </p>
              </div>
              <div className="border-t border-brass/50 pt-8 reveal" style={{ transitionDelay: "80ms" }}>
                <span className="small-caps text-brass">Local Expertise</span>
                <h4 className="font-display text-2xl text-ink mt-3 mb-4">True Insiders</h4>
                <p className="text-ink/70 leading-relaxed">
                  Born and raised in Kerala, our team combines deep local knowledge with
                  professional travel planning to reveal the region&rsquo;s hidden gems.
                </p>
              </div>
              <div className="border-t border-brass/50 pt-8 reveal" style={{ transitionDelay: "160ms" }}>
                <span className="small-caps text-brass">Personalized Journeys</span>
                <h4 className="font-display text-2xl text-ink mt-3 mb-4">Tailored for You</h4>
                <p className="text-ink/70 leading-relaxed">
                  Every itinerary is tailored to your travel style, ensuring a seamless and
                  meaningful experience from arrival to departure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM GRID ── */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-paper">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-16">
              <p className="small-caps text-spice mb-4">The Studio of Nine</p>
              <h2 className="editorial-headline text-ink text-5xl md:text-7xl">
                Meet the <em className="editorial-italic">Curators</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="reveal">
                <div className="relative overflow-hidden mb-4 bg-mist" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/images/tea-portrait.jpg"
                    alt="George K."
                    fill
                    className="object-cover grayscale contrast-125"
                  />
                </div>
                <h4 className="font-display text-2xl text-ink font-semibold">George K.</h4>
                <p className="small-caps text-brass mt-1">Founder &amp; Lead Designer</p>
                <p className="text-ink/65 text-sm mt-3 leading-relaxed">
                  George designs the high-altitude plantation walks and selects the historic
                  bungalows. He divides his time between Fort Kochi and Munnar.
                </p>
              </div>
              <div className="reveal" style={{ transitionDelay: "80ms" }}>
                <div className="relative overflow-hidden mb-4 bg-mist" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/images/fishermen.jpg"
                    alt="Anjali R."
                    fill
                    className="object-cover grayscale contrast-125"
                  />
                </div>
                <h4 className="font-display text-2xl text-ink font-semibold">Anjali R.</h4>
                <p className="small-caps text-brass mt-1">Culinary Curator</p>
                <p className="text-ink/65 text-sm mt-3 leading-relaxed">
                  Anjali leads our food research, documenting backwater fish shacks and royal
                  recipes. She makes sure every meal on your trip is unforgettable.
                </p>
              </div>
              <div className="reveal" style={{ transitionDelay: "160ms" }}>
                <div className="relative overflow-hidden mb-4 bg-mist" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/images/kochi-street.jpg"
                    alt="Thomas K."
                    fill
                    className="object-cover grayscale contrast-125"
                  />
                </div>
                <h4 className="font-display text-2xl text-ink font-semibold">Thomas K.</h4>
                <p className="small-caps text-brass mt-1">Backwater Pilot &amp; Host</p>
                <p className="text-ink/65 text-sm mt-3 leading-relaxed">
                  A second-generation houseboat navigator, Thomas manages the waterway channels
                  and private canoe coordinates across Alleppey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRESS MENTIONS ── */}
        <section className="py-24 bg-night text-paper px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none" />
          <div className="mx-auto max-w-[1000px] text-center relative z-10">
            <p className="small-caps text-brass mb-8">Press &amp; Journals</p>
            <blockquote className="blog-blockquote text-paper border-brass text-center pl-0 leading-relaxed mb-8 border-l-0 text-3xl md:text-4xl italic">
              &ldquo;Keralaway doesn&rsquo;t write itineraries; they craft visual memories and
              silent spaces. They are the antithesis of the modern tour agency.&rdquo;
            </blockquote>
            <p className="small-caps text-brass">&mdash; Cond&eacute; Nast Traveller</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-20 opacity-60">
              <div className="small-caps tracking-widest text-sm text-center">Travel + Leisure</div>
              <div className="small-caps tracking-widest text-sm text-center">
                National Geographic
              </div>
              <div className="small-caps tracking-widest text-sm text-center">
                The New York Times
              </div>
              <div className="small-caps tracking-widest text-sm text-center">Vogue Travel</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
