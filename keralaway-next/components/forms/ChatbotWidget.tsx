"use client";

import { useEffect, useRef, useState } from "react";

type Message = { from: "bot" | "user"; text: string };

const INITIAL_MESSAGE: Message =
  {
    from: "bot",
    text: "Namaskaram! I am your Keralaway virtual curator. How can we help you plan your journey through Kerala today?",
  };

function replyFor(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("dubai") || q.includes("uae") || q.includes("emirates") || q.includes("burj")) {
    return "We offer a Private Dubai Tour Package with a 3-star stay, 30-day tourist visa, private transfers, Dhow cruise dinner, desert safari, city tour, and Miracle Garden. See the Dubai journey page for current pricing and tiers.";
  }
  if (q.includes("romantic") || q.includes("couple") || q.includes("honeymoon")) {
    return "Our 'Romantic Escapes' chapter is a private journey for couples featuring heritage & mountain stays, a jeep safari, sunset cruise, and candlelit lakeside dining. Open that journey page to see current pricing.";
  }
  if (q.includes("cost") || q.includes("price") || q.includes("budget") || q.includes("expensive")) {
    return "Pricing varies by journey and season — open any journey page to see its current price or tiers, or send us your dates and we'll quote directly.";
  }
  if (q.includes("wellness") || q.includes("ayurveda") || q.includes("heal")) {
    return "We coordinate complete Ayurvedic wellness retreats in Kumarakom and Varkala, starting with personal consultations. Check the Wellness & Ayurveda journey page for details and pricing.";
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return "Namaskaram! I'm here to answer questions about stays, itineraries, and pricing for our private journeys.";
  }
  return "That sounds wonderful. Let's design an itinerary outline built around those exact preferences.";
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, typing]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setTyping(false);
    setMessages((prev) => [...prev, { from: "bot", text: replyFor(text) }]);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[45] flex flex-col items-end">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center h-12 w-12 rounded-full bg-[#bfa15f] hover:bg-[#141412] text-white shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer border-none"
      >
        <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute bottom-16 right-0 w-80 bg-[#fdfcf7] border border-[#1e1e1a]/15 shadow-2xl rounded-sm overflow-hidden flex flex-col font-sans"
          style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="bg-[#141412] text-[#fdfcf7] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              <div>
                <h4 className="font-display italic text-base font-semibold tracking-wide">
                  Keralaway Studio
                </h4>
                <p className="text-[10px] text-[#bfa15f] uppercase tracking-wider font-semibold">
                  Online Curator Chat
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white bg-transparent border-none cursor-pointer text-lg font-bold"
            >
              &times;
            </button>
          </div>

          <div
            ref={scrollRef}
            className="h-64 p-4 overflow-y-auto space-y-3 flex flex-col scroll-smooth"
            style={{ backgroundColor: "#faf9f5" }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "bot"
                    ? "max-w-[85%] self-start bg-[#bfa15f]/10 text-[#141412]/85 text-xs p-3 rounded-sm border-l-2 border-[#bfa15f] leading-relaxed"
                    : "max-w-[80%] self-end bg-[#141412] text-[#fdfcf7] text-xs p-3 rounded-sm leading-relaxed shadow-sm"
                }
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="max-w-[30%] self-start bg-[#bfa15f]/10 text-[#141412]/50 text-[10px] p-2 rounded-sm italic">
                Curator is typing...
              </div>
            )}
            <div className="max-w-[85%] self-start bg-[#faf9f5] border border-[#1e1e1a]/10 p-3 rounded-sm mt-2 text-xs space-y-2">
              <p className="text-[10px] text-[#141412]/50 uppercase tracking-wider font-semibold">
                Connect with a real Curator:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/919292125237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2 bg-[#25D366] text-white rounded-sm font-semibold text-[10px] uppercase tracking-wider hover:opacity-90"
                  style={{ textDecoration: "none" }}
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:info@keralaway.com"
                  className="flex items-center justify-center py-2 bg-[#141412] text-white rounded-sm font-semibold text-[10px] uppercase tracking-wider hover:opacity-90"
                  style={{ textDecoration: "none" }}
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-[#1e1e1a]/10 flex bg-[#fdfcf7] p-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              required
              autoComplete="off"
              className="flex-1 bg-transparent px-3 py-2 text-xs text-[#141412] placeholder:text-[#141412]/40 outline-none border-none"
            />
            <button
              type="submit"
              className="bg-[#bfa15f] hover:bg-[#141412] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors border-none cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
