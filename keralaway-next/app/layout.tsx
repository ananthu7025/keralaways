import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";
import ScrollEffects from "@/components/layout/ScrollEffects";
import WhatsAppButton from "@/components/forms/WhatsAppButton";
import ChatbotWidget from "@/components/forms/ChatbotWidget";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Keralaway — Thoughtfully curated journeys",
  description:
    "Bespoke journeys through mist-covered tea hills, ancient ritual, quiet backwaters and food shared with locals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="bg-paper text-ink overflow-x-hidden">
        {children}
        <ScrollEffects />
        <WhatsAppButton />
        <ChatbotWidget />
      </body>
    </html>
  );
}
