import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InquiryForm from "@/components/forms/InquiryForm";

export const metadata: Metadata = {
  title: "Plan Your Journey — Keralaway",
  description:
    "Begin designing your slow travel journey through Kerala. Share your interests, timeline, and travel style.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-paper text-ink overflow-x-hidden min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          {/* Left visual panel */}
          <div className="lg:col-span-5 relative hidden lg:block bg-night">
            <div className="absolute inset-0">
              <Image
                src="/images/contact-hero.jpg"
                alt="Sunrise over Kerala Lagoon"
                fill
                priority
                className="object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-night/40 to-night/10" />
            </div>
            <div className="absolute bottom-16 left-12 right-12 z-10 text-paper space-y-6">
              <p className="small-caps text-brass">&mdash; An Invitation</p>
              <h2 className="editorial-headline text-5xl xl:text-6xl">
                Let&rsquo;s design your slow path.
              </h2>
              <p className="font-display italic text-paper/85 text-xl max-w-sm">
                Every route is built around a conversation. Share a little, and we will write back
                to begin the sketch.
              </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 bg-paper px-6 md:px-16 pt-36 pb-20 flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="editorial-headline text-5xl md:text-6xl text-ink mb-4">
                Plan Your Journey
              </h1>
              <p className="font-display text-ink/70 text-lg mb-12">
                Please fill in your preferences. Our design studio will follow up via email with a
                preliminary itinerary outline within 24 hours.
                <span className="block mt-6 text-sm font-sans text-spice small-caps tracking-wider">
                  Or reach out directly:{" "}
                  <a
                    href="tel:+919292125237"
                    className="underline hover:text-brass transition-colors font-semibold"
                  >
                    +91 9292125237
                  </a>{" "}
                  &bull;{" "}
                  <a
                    href="https://wa.me/919292125237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-brass transition-colors font-semibold"
                  >
                    WhatsApp
                  </a>{" "}
                  &bull;{" "}
                  <a
                    href="mailto:info@keralaway.com"
                    className="underline hover:text-brass transition-colors font-semibold"
                  >
                    info@keralaway.com
                  </a>
                </span>
              </p>

              <InquiryForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
