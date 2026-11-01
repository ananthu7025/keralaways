import type { PriceTier } from "@/lib/supabase/types";

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PriceTiers({ tiers }: { tiers: PriceTier[] }) {
  if (tiers.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-mist/20 border-b border-ink/10">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center mb-16">
          <p className="small-caps text-spice mb-2">Choose Your Chapter</p>
          <h3 className="editorial-headline text-3xl md:text-5xl text-ink">
            Pricing <em className="editorial-italic">Tiers</em>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="bg-paper border border-ink/10 p-8 flex flex-col"
            >
              <p className="small-caps text-brass mb-2">{tier.label}</p>
              <p className="font-display text-3xl text-ink mb-4">
                {formatPrice(tier.price, tier.currency)}
                <span className="text-sm text-ink/60 font-body"> / person</span>
              </p>
              {tier.description && (
                <p className="text-ink/70 text-sm leading-relaxed mb-4">{tier.description}</p>
              )}
              {tier.features && tier.features.length > 0 && (
                <ul className="space-y-2 text-sm text-ink/80 mt-auto">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brass">&#10022;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
