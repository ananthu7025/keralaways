import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <>
      <header
        id="nav"
        className="fixed inset-x-0 top-0 z-50 transition-all duration-700 py-6"
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-12">
          <Link
            href="/#top"
            id="nav-logo"
            className="flex items-center transition-all duration-700 text-paper hover:text-brass"
            aria-label="Keralaway Home"
          >
            <svg
              id="nav-logo-img"
              className="h-9 w-auto fill-current transition-colors duration-700"
              viewBox="0 0 160 36"
            >
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
          </Link>
          <nav
            id="nav-links"
            className="hidden md:flex items-center gap-10 small-caps text-paper/85 transition-colors"
          >
            <Link href="/#story" className="hover:text-brass transition-colors">
              The Story
            </Link>
            <Link href="/#journeys" className="hover:text-brass transition-colors">
              Journeys
            </Link>
            <Link href="/#seasons" className="hover:text-brass transition-colors">
              Seasons
            </Link>
            <Link href="/#food" className="hover:text-brass transition-colors">
              Food
            </Link>
            <Link href="/#journal" className="hover:text-brass transition-colors">
              Journal
            </Link>
            <Link href="/about" className="hover:text-brass transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              id="nav-cta"
              className="small-caps border px-4 py-2 transition-all border-paper/60 text-paper hover:bg-paper hover:text-ink"
            >
              Plan My Journey
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
      <div
        id="progress-bar"
        className="fixed top-0 left-0 z-50 h-[2px] bg-brass transition-[width] duration-150"
        style={{ width: "0%" }}
      />
    </>
  );
}
