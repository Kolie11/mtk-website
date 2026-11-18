"use client";

import { formatLongDate, formatShortDate, monthLabel } from "@/lib/format";
import type { Webinar } from "@/lib/types";

type WebinarCalendarProps = {
  webinars: Webinar[];
  year: number;
  monthIndex: number;
  selectedId: string | null;
  onMonthChange: (year: number, monthIndex: number) => void;
  onSelect: (webinar: Webinar) => void;
};

const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const navButton =
  "grid size-10 place-items-center rounded-full border border-line-strong bg-white text-base text-kaasen-blue hover:bg-kaasen-blue hover:text-kaasen-yellow";

const pad = (value: number) => String(value).padStart(2, "0");

function buildCells(year: number, monthIndex: number): (number | null)[] {
  const offset = (new Date(year, monthIndex, 1).getDay() + 6) % 7; // Monday first
  const days = new Date(year, monthIndex + 1, 0).getDate();
  const cells: (number | null)[] = Array.from({ length: offset }, () => null);
  for (let day = 1; day <= days; day++) cells.push(day);
  while (cells.length % 7) cells.push(null);
  return cells;
}

export function WebinarCalendar({ webinars, year, monthIndex, selectedId, onMonthChange, onSelect }: WebinarCalendarProps) {
  const cells = buildCells(year, monthIndex);

  function shiftMonth(delta: number) {
    const date = new Date(year, monthIndex + delta, 1);
    onMonthChange(date.getFullYear(), date.getMonth());
  }

  return (
    <div className="rounded-panel bg-cream p-[clamp(18px,2.4vw,26px)] text-ink">
      <div className="mb-4 flex items-center justify-between gap-3">
        <button type="button" onClick={() => shiftMonth(-1)} aria-label="Vorheriger Monat" className={navButton}>
          ‹
        </button>
        <h3 className="m-0 text-lg" aria-live="polite">
          {monthLabel(year, monthIndex)}
        </h3>
        <button type="button" onClick={() => shiftMonth(1)} aria-label="Nächster Monat" className={navButton}>
          ›
        </button>
      </div>
      <div role="grid" aria-label={`Webinare im ${monthLabel(year, monthIndex)}`} className="grid grid-cols-7 gap-1 text-center">
        {weekdays.map((weekday) => (
          <span key={weekday} role="columnheader" className="py-1.5 text-[11px] font-bold uppercase tracking-[.08em] text-kaasen-blue/60">
            {weekday}
          </span>
        ))}
        {cells.map((day, index) => {
          if (day === null) return <span key={`empty-${index}`} role="gridcell" />;
          const iso = `${year}-${pad(monthIndex + 1)}-${pad(day)}`;
          const webinar = webinars.find((entry) => entry.date === iso);
          const isSelected = webinar?.id === selectedId;
          const tone = isSelected
            ? "border-kaasen-blue bg-kaasen-blue text-kaasen-yellow font-extrabold"
            : webinar
              ? "border-yellow-deep bg-kaasen-yellow text-kaasen-blue font-extrabold"
              : "border-kaasen-blue/6 bg-white text-kaasen-blue font-medium";
          return (
            <span key={iso} role="gridcell">
              <button
                type="button"
                disabled={!webinar}
                aria-pressed={webinar ? isSelected : undefined}
                aria-label={webinar ? `${formatLongDate(iso)}: ${webinar.title}` : formatLongDate(iso)}
                onClick={() => webinar && onSelect(webinar)}
                className={`flex aspect-square min-h-10 w-full flex-col items-center justify-center gap-[3px] rounded-input border p-0 text-sm disabled:cursor-default ${tone}`}
              >
                <span>{day}</span>
                <span aria-hidden="true" className={`size-1.5 rounded-full ${webinar ? (isSelected ? "bg-kaasen-yellow" : "bg-kaasen-blue") : "bg-transparent"}`} />
              </button>
            </span>
          );
        })}
      </div>
      <div className="mt-[18px] flex flex-col gap-1.5 border-t border-kaasen-blue/10 pt-4">
        <h4 className="m-0 text-[11px] font-bold uppercase tracking-label text-kaasen-blue/70">Nächste Termine</h4>
        {webinars.map((webinar) => (
          <button
            key={webinar.id}
            type="button"
            onClick={() => onSelect(webinar)}
            aria-pressed={webinar.id === selectedId}
            className={`flex items-center gap-3 rounded-input border-0 px-3 py-2.5 text-left text-kaasen-blue hover:bg-white ${webinar.id === selectedId ? "bg-white" : "bg-transparent"}`}
          >
            <span className="min-w-[58px] flex-none text-[12.5px] font-extrabold tabular-nums">{formatShortDate(webinar.date)}</span>
            <span className="text-small font-semibold leading-[1.4]">{webinar.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
