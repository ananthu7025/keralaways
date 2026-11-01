"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/#story", label: "The Story" },
  { href: "/#journeys", label: "Journeys" },
  { href: "/#seasons", label: "Seasons" },
  { href: "/#food", label: "Food Notes" },
  { href: "/#journal", label: "Journal" },
  { href: "/about", label: "About Studio" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("mobile-nav-active", next);
      return next;
    });
  }

  return (
    <>
      <button
        id="mobile-menu-btn"
        onClick={toggle}
        className={`block md:hidden text-paper hover:text-brass focus:outline-none transition-colors duration-700 z-50 ${
          open ? "menu-open" : ""
        }`}
        aria-label="Toggle Navigation"
      >
        <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <line
            id="bar-top"
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            className="transition-transform duration-300 origin-center"
          />
          <line
            id="bar-mid"
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            className="transition-opacity duration-300"
          />
          <line
            id="bar-bot"
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            className="transition-transform duration-300 origin-center"
          />
        </svg>
      </button>

      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 z-40 bg-night text-paper transition-transform duration-500 ease-in-out flex flex-col justify-between p-8 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-12 mt-24">
          <nav className="flex flex-col gap-6 text-3xl font-display font-light">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggle}
                className="hover:text-brass transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-6">
          <Link
            href="/contact"
            onClick={toggle}
            className="small-caps border border-paper/60 text-center py-4 text-paper hover:bg-paper hover:text-night transition-colors text-lg"
          >
            Plan My Journey
          </Link>
          <div className="text-paper/40 small-caps text-xs flex justify-between">
            <span>Keralaway Tours Private Limited</span>
            <span>Edition &middot; MMXXVI</span>
          </div>
        </div>
      </div>
    </>
  );
}
