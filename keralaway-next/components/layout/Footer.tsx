import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-night text-paper/80 px-6 md:px-12 py-20">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-12 gap-10 items-start">
        <div className="col-span-2 md:col-span-5">
          <div className="flex items-center text-paper mb-4">
            <svg className="h-10 w-auto fill-current" viewBox="0 0 160 36" aria-label="Keralaway logo">
              <text
                x="0"
                y="27"
                fontFamily="'Fraunces', Georgia, serif"
                fontWeight="300"
                fontSize="28"
                letterSpacing="-0.02em"
                fill="currentColor"
              >
                Keralaway
              </text>
            </svg>
          </div>
          <p className="font-display italic text-paper/60 mt-3 max-w-sm">
            Thoughtfully curated journeys &mdash; designed by hand, in Fort Kochi.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="small-caps text-brass mb-4">Studio</p>
          <ul className="space-y-2 font-display text-sm">
            <li>Fort Kochi, 682001</li>
            <li>Kerala, India</li>
            <li className="pt-2">
              <a href="tel:+919292125237" className="hover:text-brass transition-colors">
                +91 9292125237
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919292125237"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brass transition-colors"
              >
                WhatsApp Chat
              </a>
            </li>
            <li>
              <a href="mailto:info@keralaway.com" className="hover:text-brass transition-colors">
                info@keralaway.com
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="small-caps text-brass mb-4">Read</p>
          <ul className="space-y-2 font-display">
            <li>
              <Link href="/#journal" className="hover:text-brass transition-colors">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/#seasons" className="hover:text-brass transition-colors">
                Seasons
              </Link>
            </li>
            <li>
              <Link href="/#food" className="hover:text-brass transition-colors">
                Food Notes
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="small-caps text-brass mb-4">Letters</p>
          <p className="font-display text-paper/70 mb-4 text-sm">
            A quiet monthly note. No promotions.
          </p>
          <div className="flex border-b border-paper/30">
            <input
              placeholder="your@email"
              className="flex-1 bg-transparent py-2 focus:outline-none placeholder:text-paper/40 font-display"
            />
            <button type="button" className="small-caps text-brass px-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] mt-16 pt-8 border-t border-paper/15 flex flex-wrap items-center justify-between gap-4 small-caps text-paper/50">
        <span>&copy; MMXXVI Keralaway Tours</span>
        <span
          className="font-hand text-brass text-lg"
          style={{ textTransform: "none", letterSpacing: "normal" }}
        >
          written slowly, in Kerala
        </span>
      </div>
    </footer>
  );
}
