import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getDestinationBySlug, getAllDestinationSlugs } from "@/lib/destinations-data";

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/destinations/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return {};

  return {
    title: `${dest.name} Destination Guide — Keralaway`,
    description: dest.intro.slice(0, 160),
  };
}

export default async function DestinationPage(props: PageProps<"/destinations/[slug]">) {
  const { slug } = await props.params;
  const dest = getDestinationBySlug(slug);

  if (!dest) notFound();

  return (
    <>
      <Header />
      <main className="bg-paper text-ink overflow-x-hidden">
        {/* ── HERO ── */}
        <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden bg-night flex items-center">
          <div className="absolute inset-0">
            <Image
              src={dest.heroImage}
              alt={dest.heroAlt}
              fill
              priority
              className="object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/60 to-night" />
          </div>
          <div className="relative z-10 max-w-4xl px-6 md:px-12 mt-20">
            <p className="small-caps text-brass mb-4">&mdash; Destination Guide</p>
            <h1 className="editorial-headline text-paper text-6xl md:text-8xl leading-none">
              {dest.name}
            </h1>
            <p className="font-display italic text-paper/85 text-xl md:text-2xl mt-6 max-w-xl">
              &ldquo;{dest.heroQuote}&rdquo;
            </p>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className="py-20 px-6 md:px-12 bg-paper">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 reveal">
              <p className="small-caps text-spice">{dest.kicker}</p>
              <h2 className="editorial-headline text-4xl md:text-5xl text-ink leading-tight">
                {dest.heading}
              </h2>
              <p className="font-display text-lg text-ink/75 leading-relaxed">{dest.intro}</p>
              <div className="pt-6 border-t border-ink/10 space-y-2">
                {dest.stats.map((stat) => (
                  <div key={stat.label} className="flex justify-between">
                    <span className="small-caps text-xs">{stat.label}</span>
                    <span className="font-display text-right">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustrated SVG Map */}
            <div className="lg:col-span-7 border border-ink/10 p-6 bg-mist/20 rounded shadow-inner reveal">
              <p className="small-caps text-spice text-center mb-4">Curated Local Map</p>
              <svg
                className="w-full h-auto max-w-[500px] mx-auto fill-none stroke-ink/30 stroke-1"
                viewBox="0 0 400 300"
              >
                {dest.mapPaths.map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    strokeDasharray={i === 0 ? "3,3" : "2,2"}
                    className={i === 0 ? undefined : "opacity-50"}
                  />
                ))}

                {dest.mapMarkers.map((marker) => (
                  <g
                    key={marker.label}
                    className="map-marker"
                    transform={`translate(${marker.x}, ${marker.y})`}
                  >
                    <circle
                      r="6"
                      className={
                        marker.variant === "spice"
                          ? "fill-spice stroke-night stroke-2"
                          : "fill-brass stroke-night stroke-2"
                      }
                    />
                    <text
                      x={marker.align === "right" ? -12 : 12}
                      y={marker.align === "right" ? 16 : 4}
                      className={`map-label ${marker.align === "right" ? "text-right" : ""}`}
                    >
                      {marker.label}
                    </text>
                  </g>
                ))}

                {/* Compass Rose */}
                <g transform="translate(350, 50)" className="stroke-ink/20">
                  <line x1="0" y1="-20" x2="0" y2="20" />
                  <line x1="-20" y1="0" x2="20" y2="0" />
                  <text x="-4" y="-24" className="font-display text-[9px] fill-ink/40">
                    N
                  </text>
                </g>
              </svg>
              <p className="text-xs text-ink/50 text-center mt-4">
                Hover over pins to identify locations on your personalized walk itineraries.
              </p>
            </div>
          </div>
        </section>

        {/* ── STAYS WE RECOMMEND ── */}
        <section className="py-24 bg-mist/30 px-6 md:px-12 border-t border-b border-ink/10">
          <div className="mx-auto max-w-[1200px]">
            <h3 className="editorial-headline text-center text-4xl md:text-6xl text-ink mb-16">
              Stays We <em className="editorial-italic">Recommend</em>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {dest.stays.map((stay, i) => (
                <div
                  key={stay.name}
                  className="bg-paper p-8 border border-ink/10 reveal"
                  style={i === 1 ? { transitionDelay: "80ms" } : undefined}
                >
                  <span className="small-caps text-brass">{stay.kicker}</span>
                  <h4 className="font-display text-3xl text-ink mt-2 mb-4">{stay.name}</h4>
                  <p className="text-ink/70 leading-relaxed mb-6">{stay.body}</p>
                  <span className="text-sm font-semibold text-spice">{stay.features}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THINGS WE CURATE ── */}
        <section className="py-24 px-6 md:px-12 bg-paper">
          <div className="mx-auto max-w-[1200px]">
            <h3 className="editorial-headline text-center text-4xl md:text-6xl text-ink mb-16">
              Things We <em className="editorial-italic">Curate There</em>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dest.experiences.map((exp, i) => (
                <div
                  key={exp.title}
                  className="border-t border-ink/30 pt-6 reveal"
                  style={i > 0 ? { transitionDelay: `${i * 80}ms` } : undefined}
                >
                  <p className="font-hand text-spice text-2xl mb-2">{exp.no}</p>
                  <h4 className="font-display text-2xl text-ink mb-4">{exp.title}</h4>
                  <p className="text-ink/75 leading-relaxed text-sm">{exp.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-moss-deep text-paper text-center px-6">
          <h3 className="editorial-headline text-4xl md:text-6xl mb-6">Drawn to {dest.name}?</h3>
          <p className="font-display italic text-paper/85 text-lg mb-8 max-w-md mx-auto">
            {dest.ctaBody}
          </p>
          <Link
            href="/contact"
            className="small-caps bg-brass text-night px-8 py-4 hover:bg-paper hover:text-ink transition-colors cursor-pointer text-center text-sm inline-block"
          >
            Plan Your {dest.name} Journey &rarr;
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
