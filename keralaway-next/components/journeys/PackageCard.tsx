import Image from "next/image";
import Link from "next/link";
import type { Package } from "@/lib/supabase/types";

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PackageCard({
  pkg,
  index,
}: {
  pkg: Package;
  index: number;
}) {
  const imageFirst = index % 2 === 0;
  const roman = (index + 1).toString();

  const priceLabel = pkg.price_amount
    ? `From ${formatPrice(pkg.price_amount, pkg.currency)}`
    : pkg.price_tiers.length > 0
      ? `From ${formatPrice(pkg.price_tiers[0].price, pkg.price_tiers[0].currency)}`
      : null;

  return (
    <article
      className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center px-6 md:px-12 py-20 md:py-28 border-b border-ink/10 ${
        imageFirst ? "bg-paper" : "bg-mist/30"
      }`}
    >
      <div
        className={`md:col-span-7 reveal ${imageFirst ? "" : "md:order-2 md:col-start-6"}`}
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
          {pkg.hero_image_url && (
            <Image
              src={pkg.hero_image_url}
              alt={pkg.title}
              fill
              loading="lazy"
              className="pimg object-cover"
            />
          )}
        </div>
      </div>
      <div
        className={`md:col-span-4 reveal ${imageFirst ? "md:col-start-9" : "md:order-1 md:col-start-2"}`}
      >
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-display italic text-brass text-2xl">No. {roman}</span>
          <div className="flex-1 h-px bg-ink/30" />
        </div>
        <h3 className="editorial-headline text-ink text-4xl md:text-5xl mb-5">{pkg.title}</h3>
        {pkg.subtitle && (
          <p className="font-display italic text-ink/70 text-xl mb-6 leading-snug">
            {pkg.subtitle}
          </p>
        )}
        {pkg.overview_body && (
          <p className="text-ink/75 leading-relaxed mb-8 max-w-md">
            {pkg.overview_body.split("\n\n")[0]}
          </p>
        )}
        <div className="flex items-center justify-between max-w-md gap-4">
          <span className="small-caps text-ink/60">
            {pkg.duration_label}
            {priceLabel && ` • ${priceLabel}`}
          </span>
          <Link
            href={`/journeys/${pkg.slug}`}
            className="small-caps text-ink border-b border-ink/40 hover:border-brass hover:text-brass transition-colors pb-1 whitespace-nowrap"
          >
            Read this chapter &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
