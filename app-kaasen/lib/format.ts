const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

/** 94.9 → "94,90 €" */
export function formatEuro(amount: number): string {
  return euro.format(amount);
}

const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

/** "2026-11-05" → Date (local time, no TZ shift) */
export function parseIsoDate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

/** "2026-11-05" → "5. Nov." */
export function formatShortDate(iso: string): string {
  const date = parseIsoDate(iso);
  return `${date.getDate()}. ${months[date.getMonth()].slice(0, 3)}.`;
}

/** "2026-11-05" → "Donnerstag, 5. November 2026" */
export function formatLongDate(iso: string): string {
  return parseIsoDate(iso).toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function monthLabel(year: number, monthIndex: number): string {
  return `${months[monthIndex]} ${year}`;
}
