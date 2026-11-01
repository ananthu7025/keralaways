"use client";

export type ItineraryDayDraft = {
  day_number: number;
  title: string;
  description: string;
  highlights: string[];
  overnight_note: string;
};

export function emptyItineraryDay(dayNumber: number): ItineraryDayDraft {
  return { day_number: dayNumber, title: "", description: "", highlights: [], overnight_note: "" };
}

type Props = {
  days: ItineraryDayDraft[];
  onChange: (days: ItineraryDayDraft[]) => void;
};

export default function ItineraryRowEditor({ days, onChange }: Props) {
  function updateDay(index: number, patch: Partial<ItineraryDayDraft>) {
    onChange(days.map((d, i) => (i === index ? { ...d, ...patch } : d)));
  }

  function addDay() {
    onChange([...days, emptyItineraryDay(days.length + 1)]);
  }

  function removeDay(index: number) {
    onChange(
      days.filter((_, i) => i !== index).map((d, i) => ({ ...d, day_number: i + 1 }))
    );
  }

  function updateHighlights(index: number, raw: string) {
    updateDay(index, { highlights: raw.split("\n").map((h) => h.trim()).filter(Boolean) });
  }

  return (
    <div className="space-y-4">
      {days.map((day, i) => (
        <div key={i} className="border border-ink/15 bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="small-caps text-brass">Day {day.day_number}</span>
            <button
              type="button"
              onClick={() => removeDay(i)}
              className="text-spice text-xs small-caps hover:underline"
            >
              Remove Day
            </button>
          </div>
          <input
            value={day.title}
            onChange={(e) => updateDay(i, { title: e.target.value })}
            placeholder="Day title, e.g. Arrival & Dhow Cruise Dinner"
            className="w-full border border-ink/20 px-3 py-2 font-display"
          />
          <textarea
            value={day.description}
            onChange={(e) => updateDay(i, { description: e.target.value })}
            placeholder="Description paragraph"
            rows={2}
            className="w-full border border-ink/20 px-3 py-2 font-body text-sm"
          />
          <textarea
            value={day.highlights.join("\n")}
            onChange={(e) => updateHighlights(i, e.target.value)}
            placeholder={"One highlight per line"}
            rows={3}
            className="w-full border border-ink/20 px-3 py-2 font-body text-sm"
          />
          <input
            value={day.overnight_note}
            onChange={(e) => updateDay(i, { overnight_note: e.target.value })}
            placeholder="Overnight note, e.g. Overnight: Ibis Styles or similar 3-star hotel"
            className="w-full border border-ink/20 px-3 py-2 font-body text-xs"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addDay}
        className="small-caps border border-ink/30 px-4 py-2 hover:border-brass hover:text-brass transition-colors"
      >
        + Add Day
      </button>
    </div>
  );
}
