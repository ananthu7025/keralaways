"use client";

import { useEffect, useState } from "react";

/**
 * Simplified stand-in for the old site's letter-by-letter hero entrance
 * (which split the H1 into per-character spans with staggered inline
 * transition delays via a <script> block). Here we just fade/slide the
 * whole headline in on mount with a short delay — a tasteful equivalent
 * without re-implementing the bespoke letter-splitting script.
 */
export default function HomeHeroTitle() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <h1
      className="editorial-headline text-paper transition-all duration-1000 ease-out"
      style={{
        fontSize: "clamp(72px, 9.5vw, 140px)",
        lineHeight: 0.85,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      Keralaway
    </h1>
  );
}
