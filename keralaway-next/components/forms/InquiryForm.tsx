"use client";

import { useState, type FormEvent } from "react";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

let emailjsReady: Promise<void> | null = null;

function loadEmailJs(): Promise<void> {
  if (emailjsReady) return emailjsReady;
  emailjsReady = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      // @ts-expect-error -- loaded globally by the CDN script
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load EmailJS SDK"));
    document.head.appendChild(script);
  });
  return emailjsReady;
}

type InquiryFormProps = {
  journeyName?: string;
  variant?: "light" | "dark";
  className?: string;
};

export default function InquiryForm({
  journeyName,
  variant = "light",
  className = "",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const isDark = variant === "dark";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const formObject: Record<string, string | string[]> = {};
    formData.forEach((value, key) => {
      const v = String(value);
      if (formObject[key]) {
        formObject[key] = Array.isArray(formObject[key])
          ? [...(formObject[key] as string[]), v]
          : [formObject[key] as string, v];
      } else {
        formObject[key] = v;
      }
    });

    try {
      await loadEmailJs();
      // @ts-expect-error -- loaded globally by the CDN script
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formObject);
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error("Enquiry submission failed:", err);
      setStatus("error");
    }
  }

  const inputClass = isDark
    ? "bg-transparent border-b border-paper/40 py-2 focus:outline-none focus:border-brass font-display text-lg placeholder:text-paper/45 text-paper"
    : "bg-transparent border-b border-ink/30 py-2 focus:outline-none focus:border-brass font-display text-lg placeholder:text-ink/30";

  if (status === "success") {
    return (
      <div className={`text-center py-10 ${className}`}>
        <div className="h-16 w-16 bg-brass/20 text-brass rounded-full flex items-center justify-center mx-auto text-3xl font-light mb-6">
          &#10003;
        </div>
        <h3 className={`font-display italic text-2xl mb-3 ${isDark ? "text-paper" : "text-ink"}`}>
          Enquiry Sent Successfully
        </h3>
        <p className={isDark ? "text-paper/70" : "text-ink/70"}>
          A curator will reach out to you via email within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="small-caps mt-6 border-b border-brass text-brass pb-1"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-xl ${className}`}
    >
      {journeyName && <input type="hidden" name="journey_name" value={journeyName} />}

      <div className="flex flex-col gap-1">
        <label className="small-caps text-xs opacity-60">Full Name</label>
        <input type="text" name="name" required className={inputClass} placeholder="John Smith" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="small-caps text-xs opacity-60">Email</label>
        <input type="email" name="email" required className={inputClass} placeholder="john@example.com" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="small-caps text-xs opacity-60">Phone / WhatsApp</label>
        <input type="tel" name="phone" className={inputClass} placeholder="+91 92921 25237" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="small-caps text-xs opacity-60">Preferred Travel Date</label>
        <input type="date" name="travel_date" className={inputClass} />
      </div>
      <div className="md:col-span-2 flex flex-col gap-1">
        <label className="small-caps text-xs opacity-60">Notes</label>
        <textarea
          name="notes"
          rows={4}
          className={`${inputClass} border border-ink/20`}
          placeholder="Tell us a little about the journey you have in mind."
        />
      </div>

      {status === "error" && (
        <p className="md:col-span-2 text-spice text-sm">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="md:col-span-2 small-caps bg-brass text-night px-8 py-3 hover:bg-night hover:text-paper transition-colors disabled:opacity-50 w-fit"
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
