import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    const journeySlugs = [
      "dubai-private-tour",
      "cultural-immersions",
      "kochi-stopovers",
      "nature-trails",
      "slow-kerala",
      "wellness-ayurveda",
      "wayanad-unscripted",
      "malabar-trails",
      "family-private-journeys",
      "romantic-escapes",
    ];
    return journeySlugs.map((slug) => ({
      source: `/journey-${slug}.html`,
      destination: `/journeys/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
