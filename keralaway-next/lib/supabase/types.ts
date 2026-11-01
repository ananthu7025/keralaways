export type PriceTier = {
  label: string;
  price: number;
  currency: string;
  description?: string;
  features?: string[];
};

export type ItineraryDay = {
  id: string;
  package_id: string;
  day_number: number;
  title: string;
  description: string | null;
  highlights: string[];
  overnight_note: string | null;
};

export type Package = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  hero_image_url: string | null;
  overview_heading: string | null;
  overview_body: string | null;
  duration_label: string | null;
  hotel_category: string | null;
  tour_style: string | null;
  visa_info: string | null;
  best_season: string | null;
  inclusions: string[];
  exclusions: string[];
  currency: string;
  price_amount: number | null;
  price_usd: number | null;
  price_tiers: PriceTier[];
  featured_order: number | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type PackageWithItinerary = Package & {
  itinerary_days: ItineraryDay[];
};

export type Database = {
  public: {
    Tables: {
      packages: {
        Row: Package;
        Insert: Partial<Package> & { slug: string; title: string };
        Update: Partial<Package>;
        Relationships: [];
      };
      itinerary_days: {
        Row: ItineraryDay;
        Insert: Partial<ItineraryDay> & {
          package_id: string;
          day_number: number;
          title: string;
        };
        Update: Partial<ItineraryDay>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
