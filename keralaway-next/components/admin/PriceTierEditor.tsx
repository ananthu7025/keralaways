"use client";

import type { PriceTier } from "@/lib/supabase/types";

function emptyTier(): PriceTier {
  return { label: "", price: 0, currency: "INR", description: "", features: [] };
}

type Props = {
  tiers: PriceTier[];
  onChange: (tiers: PriceTier[]) => void;
};

export default function PriceTierEditor({ tiers, onChange }: Props) {
  function updateTier(index: number, patch: Partial<PriceTier>) {
    onChange(tiers.map((t, i) => (i === index ? { ...t, ...patch } : t)));
  }

  function removeTier(index: number) {
    onChange(tiers.filter((_, i) => i !== index));
  }

  function updateFeatures(index: number, raw: string) {
    updateTier(index, { features: raw.split("\n").map((f) => f.trim()).filter(Boolean) });
  }

  return (
    <div className="space-y-4">
      {tiers.map((tier, i) => (
        <div key={i} className="border border-ink/15 bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="small-caps text-brass">Tier {i + 1}</span>
            <button
              type="button"
              onClick={() => removeTier(i)}
              className="text-spice text-xs small-caps hover:underline"
            >
              Remove Tier
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              value={tier.label}
              onChange={(e) => updateTier(i, { label: e.target.value })}
              placeholder="Label, e.g. Essential"
              className="border border-ink/20 px-3 py-2 font-display"
            />
            <input
              type="number"
              value={tier.price}
              onChange={(e) => updateTier(i, { price: Number(e.target.value) })}
              placeholder="Price"
              className="border border-ink/20 px-3 py-2 font-display"
            />
            <input
              value={tier.currency}
              onChange={(e) => updateTier(i, { currency: e.target.value })}
              placeholder="Currency, e.g. USD"
              className="border border-ink/20 px-3 py-2 font-display"
            />
          </div>
          <textarea
            value={tier.description ?? ""}
            onChange={(e) => updateTier(i, { description: e.target.value })}
            placeholder="Short description"
            rows={2}
            className="w-full border border-ink/20 px-3 py-2 font-body text-sm"
          />
          <textarea
            value={(tier.features ?? []).join("\n")}
            onChange={(e) => updateFeatures(i, e.target.value)}
            placeholder={"One feature per line"}
            rows={3}
            className="w-full border border-ink/20 px-3 py-2 font-body text-sm"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...tiers, emptyTier()])}
        className="small-caps border border-ink/30 px-4 py-2 hover:border-brass hover:text-brass transition-colors"
      >
        + Add Price Tier
      </button>
    </div>
  );
}
