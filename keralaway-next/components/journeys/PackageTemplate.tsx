import Image from "next/image";
import type { PackageWithItinerary } from "@/lib/supabase/types";
import ItineraryDay from "./ItineraryDay";
import PriceTiers from "./PriceTiers";
import InquiryForm from "@/components/forms/InquiryForm";

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PackageTemplate({ pkg }: { pkg: PackageWithItinerary }) {
  const hasOutline =
    pkg.duration_label ||
    pkg.hotel_category ||
    pkg.tour_style ||
    pkg.visa_info ||
    pkg.best_season ||
    pkg.price_amount;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[75vh] min-h-[540px] w-full overflow-hidden bg-night flex items-center">
        <div className="absolute inset-0">
          {pkg.hero_image_url && (
            <Image
              src={pkg.hero_image_url}
              alt={pkg.title}
              fill
              priority
              className="object-cover opacity-65"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/60 to-night" />
        </div>
        <div className="relative z-10 max-w-4xl px-6 md:px-12 mt-20">
          <p className="small-caps text-brass mb-4 tracking-wider">
            &mdash; Curated Journey
          </p>
          <h1 className="editorial-headline text-paper text-6xl md:text-8xl leading-none">
            {pkg.title}
          </h1>
          {pkg.subtitle && (
            <p className="font-display italic text-paper/85 text-xl md:text-2xl mt-6 max-w-2xl leading-relaxed">
              {pkg.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 md:px-12 bg-paper">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-12">
          {hasOutline && (
            <div className="md:col-span-5">
              <p className="small-caps text-spice mb-4">Package Outline</p>
              <h2 className="editorial-headline text-3xl md:text-5xl text-ink">
                {pkg.overview_heading ?? "The Outline."}
              </h2>
              <div className="mt-8 space-y-3">
                {pkg.duration_label && (
                  <div className="flex justify-between border-b border-ink/10 pb-2.5">
                    <span className="small-caps text-ink/70">Duration</span>
                    <span className="font-display text-lg text-ink font-medium">
                      {pkg.duration_label}
                    </span>
                  </div>
                )}
                {pkg.hotel_category && (
                  <div className="flex justify-between border-b border-ink/10 pb-2.5">
                    <span className="small-caps text-ink/70">Hotel Category</span>
                    <span className="font-display text-sm text-right md:max-w-[260px] text-ink font-medium leading-snug">
                      {pkg.hotel_category}
                    </span>
                  </div>
                )}
                {pkg.tour_style && (
                  <div className="flex justify-between border-b border-ink/10 pb-2.5">
                    <span className="small-caps text-ink/70">Tour Style</span>
                    <span className="font-display text-sm text-right text-ink font-medium">
                      {pkg.tour_style}
                    </span>
                  </div>
                )}
                {pkg.visa_info && (
                  <div className="flex justify-between border-b border-ink/10 pb-2.5">
                    <span className="small-caps text-ink/70">Visa</span>
                    <span className="font-display text-sm text-right text-brass font-medium">
                      {pkg.visa_info}
                    </span>
                  </div>
                )}
                {pkg.best_season && (
                  <div className="flex justify-between border-b border-ink/10 pb-2.5">
                    <span className="small-caps text-ink/70">Best Season</span>
                    <span className="font-display text-lg text-ink">{pkg.best_season}</span>
                  </div>
                )}
                {pkg.price_amount && (
                  <div className="flex justify-between border-b border-ink/10 pb-2.5 items-center">
                    <span className="small-caps text-ink/70">Package Rate</span>
                    <span className="font-display text-lg text-brass font-medium">
                      Starting {formatPrice(pkg.price_amount, pkg.currency)}
                      {pkg.price_usd && (
                        <span className="text-xs text-ink/60 font-body">
                          {" "}
                          / {formatPrice(pkg.price_usd, "USD")} per person
                        </span>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div
            className={`font-display text-lg leading-relaxed text-ink/80 space-y-6 ${
              hasOutline ? "md:col-span-7" : "md:col-span-12"
            }`}
          >
            {pkg.overview_body &&
              pkg.overview_body
                .split("\n\n")
                .map((para, i) => <p key={i}>{para}</p>)}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#inquire"
                className="small-caps bg-ink text-paper px-6 py-3.5 hover:bg-brass hover:text-night transition-colors inline-block text-sm font-medium"
              >
                Request a Quote &rarr;
              </a>
              {pkg.itinerary_days.length > 0 && (
                <a
                  href="#itinerary"
                  className="small-caps text-ink/70 border-b border-ink/30 hover:border-brass hover:text-brass transition-colors pb-1 text-sm"
                >
                  View Detailed Schedule &darr;
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      {pkg.itinerary_days.length > 0 && (
        <section id="itinerary" className="py-24 bg-mist/30 px-6 md:px-12 border-t border-b border-ink/10">
          <div className="mx-auto max-w-[950px]">
            <div className="text-center mb-16">
              <p className="small-caps text-spice mb-2">Private Itinerary</p>
              <h3 className="editorial-headline text-4xl md:text-6xl text-ink">
                Your <em className="editorial-italic">Schedule</em>
              </h3>
            </div>
            <div className="space-y-4">
              {pkg.itinerary_days.map((day) => (
                <ItineraryDay key={day.id} day={day} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INCLUSIONS / EXCLUSIONS */}
      {(pkg.inclusions.length > 0 || pkg.exclusions.length > 0) && (
        <section className="py-24 px-6 md:px-12 bg-paper border-b border-ink/10">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center mb-16">
              <p className="small-caps text-spice mb-2">Package Breakdown</p>
              <h3 className="editorial-headline text-3xl md:text-5xl text-ink">
                What is <em className="editorial-italic">Included</em>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pkg.inclusions.length > 0 && (
                <div className="bg-mist/20 p-8 border border-ink/10">
                  <h4 className="font-display text-2xl text-ink mb-6 flex items-center gap-3">
                    <span className="text-moss-deep text-xl font-bold">&#10003;</span> Included
                  </h4>
                  <ul className="space-y-4 font-body text-sm text-ink/80 leading-relaxed">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-brass font-bold text-base mt-[-2px]">&#10022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {pkg.exclusions.length > 0 && (
                <div className="bg-mist/10 p-8 border border-ink/10">
                  <h4 className="font-display text-2xl text-ink mb-6 flex items-center gap-3">
                    <span className="text-spice text-xl font-bold">&#10005;</span> Not Included
                  </h4>
                  <ul className="space-y-4 font-body text-sm text-ink/75 leading-relaxed">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-spice font-bold text-sm mt-[-1px]">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <PriceTiers tiers={pkg.price_tiers} />

      {/* INQUIRE */}
      <section id="inquire" className="py-24 px-6 md:px-12 bg-night text-paper">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="small-caps text-brass mb-4">Begin This Chapter</p>
          <h3 className="editorial-headline text-3xl md:text-5xl text-paper mb-12">
            Request Your <em className="editorial-italic">Quote</em>
          </h3>
          <div className="flex justify-center">
            <InquiryForm journeyName={pkg.title} variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
