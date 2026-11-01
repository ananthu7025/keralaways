"use client";

import { useState } from "react";
import type { ItineraryDay as ItineraryDayType } from "@/lib/supabase/types";

export default function ItineraryDay({ day }: { day: ItineraryDayType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-ink/20 pb-4 accordion-item ${open ? "accordion-open" : ""}`}>
      <div
        className="flex items-center justify-between py-5 accordion-header cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-hand text-spice text-2xl">Day {day.day_number}</span>
          <h4 className="font-display text-2xl text-ink">{day.title}</h4>
        </div>
        <span className="accordion-icon text-xl text-ink/40">&darr;</span>
      </div>
      <div className="accordion-content">
        <div className="font-body text-ink/75 leading-relaxed space-y-3 py-2">
          {day.description && <p>{day.description}</p>}
          {day.highlights.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {day.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
          {day.overnight_note && (
            <p className="text-xs small-caps text-ink/60 mt-3 pt-2 border-t border-ink/10">
              {day.overnight_note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
