"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { PackageWithItinerary, PriceTier } from "@/lib/supabase/types";
import type { PackageActionInput } from "@/app/admin/actions";
import ItineraryRowEditor, {
  type ItineraryDayDraft,
} from "./ItineraryRowEditor";
import PriceTierEditor from "./PriceTierEditor";
import ImagePicker from "./ImagePicker";

type Props = {
  initial?: PackageWithItinerary;
  onSubmit: (input: PackageActionInput) => Promise<void>;
};

function toDraftDays(pkg?: PackageWithItinerary): ItineraryDayDraft[] {
  if (!pkg) return [];
  return pkg.itinerary_days.map((d) => ({
    day_number: d.day_number,
    title: d.title,
    description: d.description ?? "",
    highlights: d.highlights,
    overnight_note: d.overnight_note ?? "",
  }));
}

export default function PackageForm({ initial, onSubmit }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [title, setTitle] = useState(initial?.title ?? "");
  const [subtitle, setSubtitle] = useState(initial?.subtitle ?? "");
  const [heroImageUrl, setHeroImageUrl] = useState(initial?.hero_image_url ?? "");
  const [overviewHeading, setOverviewHeading] = useState(initial?.overview_heading ?? "");
  const [overviewBody, setOverviewBody] = useState(initial?.overview_body ?? "");
  const [durationLabel, setDurationLabel] = useState(initial?.duration_label ?? "");
  const [hotelCategory, setHotelCategory] = useState(initial?.hotel_category ?? "");
  const [tourStyle, setTourStyle] = useState(initial?.tour_style ?? "");
  const [visaInfo, setVisaInfo] = useState(initial?.visa_info ?? "");
  const [bestSeason, setBestSeason] = useState(initial?.best_season ?? "");
  const [inclusions, setInclusions] = useState((initial?.inclusions ?? []).join("\n"));
  const [exclusions, setExclusions] = useState((initial?.exclusions ?? []).join("\n"));
  const [currency, setCurrency] = useState(initial?.currency ?? "INR");
  const [priceAmount, setPriceAmount] = useState(initial?.price_amount?.toString() ?? "");
  const [priceUsd, setPriceUsd] = useState(initial?.price_usd?.toString() ?? "");
  const [priceTiers, setPriceTiers] = useState<PriceTier[]>(initial?.price_tiers ?? []);
  const [featuredOrder, setFeaturedOrder] = useState(
    initial?.featured_order?.toString() ?? ""
  );
  const [isPublished, setIsPublished] = useState(initial?.is_published ?? false);
  const [itineraryDays, setItineraryDays] = useState<ItineraryDayDraft[]>(toDraftDays(initial));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      await onSubmit({
        slug,
        title,
        subtitle: subtitle || null,
        hero_image_url: heroImageUrl || null,
        overview_heading: overviewHeading || null,
        overview_body: overviewBody || null,
        duration_label: durationLabel || null,
        hotel_category: hotelCategory || null,
        tour_style: tourStyle || null,
        visa_info: visaInfo || null,
        best_season: bestSeason || null,
        inclusions: inclusions.split("\n").map((s) => s.trim()).filter(Boolean),
        exclusions: exclusions.split("\n").map((s) => s.trim()).filter(Boolean),
        currency,
        price_amount: priceAmount ? Number(priceAmount) : null,
        price_usd: priceUsd ? Number(priceUsd) : null,
        price_tiers: priceTiers,
        featured_order: featuredOrder ? Number(featuredOrder) : null,
        is_published: isPublished,
        itinerary_days: itineraryDays,
      });
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Failed to save package.");
    } finally {
      setSaving(false);
    }
  }

  const inputClass = "w-full border border-ink/20 px-3 py-2 font-display bg-white";
  const labelClass = "small-caps text-ink/60 text-xs block mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-3xl">
      <section className="space-y-4">
        <h2 className="editorial-headline text-2xl text-ink">Basics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Slug (URL)</label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              pattern="[a-z0-9-]+"
              placeholder="e.g. dubai-private-tour"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Subtitle / Tagline</label>
          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="e.g. Kochi &bull; Munnar &bull; Kumarakom"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Hero Image</label>
          <p className="text-ink/50 text-xs mb-2">
            Use /images/filename.jpg for an image already added to the project, or paste a full
            https:// URL to any hosted image.
          </p>
          <ImagePicker value={heroImageUrl} onChange={setHeroImageUrl} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="editorial-headline text-2xl text-ink">Overview</h2>
        <div>
          <label className={labelClass}>Overview Heading</label>
          <input
            value={overviewHeading}
            onChange={(e) => setOverviewHeading(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Overview Body (paragraphs separated by blank lines)</label>
          <textarea
            value={overviewBody}
            onChange={(e) => setOverviewBody(e.target.value)}
            rows={6}
            className={`${inputClass} font-body text-sm`}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Duration Label</label>
            <input
              value={durationLabel}
              onChange={(e) => setDurationLabel(e.target.value)}
              placeholder="e.g. 3 Nights &bull; 4 Days"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Best Season</label>
            <input
              value={bestSeason}
              onChange={(e) => setBestSeason(e.target.value)}
              placeholder="e.g. October &mdash; April"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Hotel Category (optional)</label>
            <input
              value={hotelCategory}
              onChange={(e) => setHotelCategory(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Tour Style (optional)</label>
            <input
              value={tourStyle}
              onChange={(e) => setTourStyle(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Visa Info (optional)</label>
            <input
              value={visaInfo}
              onChange={(e) => setVisaInfo(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="editorial-headline text-2xl text-ink">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Currency</label>
            <input
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Headline Price</label>
            <input
              type="number"
              value={priceAmount}
              onChange={(e) => setPriceAmount(e.target.value)}
              placeholder="e.g. 34500"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>USD Equivalent (optional)</label>
            <input
              type="number"
              value={priceUsd}
              onChange={(e) => setPriceUsd(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Price Tiers (optional)</label>
          <PriceTierEditor tiers={priceTiers} onChange={setPriceTiers} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="editorial-headline text-2xl text-ink">Itinerary</h2>
        <ItineraryRowEditor days={itineraryDays} onChange={setItineraryDays} />
      </section>

      <section className="space-y-4">
        <h2 className="editorial-headline text-2xl text-ink">Inclusions &amp; Exclusions</h2>
        <div>
          <label className={labelClass}>Included (one per line)</label>
          <textarea
            value={inclusions}
            onChange={(e) => setInclusions(e.target.value)}
            rows={5}
            className={`${inputClass} font-body text-sm`}
          />
        </div>
        <div>
          <label className={labelClass}>Not Included (one per line)</label>
          <textarea
            value={exclusions}
            onChange={(e) => setExclusions(e.target.value)}
            rows={5}
            className={`${inputClass} font-body text-sm`}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="editorial-headline text-2xl text-ink">Publishing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Featured Order (lower shows first; blank = hidden from homepage)</label>
            <input
              type="number"
              value={featuredOrder}
              onChange={(e) => setFeaturedOrder(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="flex items-center gap-3 mt-6">
            <input
              id="is_published"
              type="checkbox"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="accent-brass h-5 w-5"
            />
            <label htmlFor="is_published" className="small-caps text-ink/70">
              Published (visible on the public site)
            </label>
          </div>
        </div>
      </section>

      {error && <p className="text-spice">{error}</p>}

      <button
        type="submit"
        disabled={saving}
        className="small-caps bg-brass text-night px-8 py-4 hover:bg-night hover:text-paper transition-colors disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save Package"}
      </button>
    </form>
  );
}
