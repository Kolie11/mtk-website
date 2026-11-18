"use client";

type FilterChipsProps = {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  /** pill = grouped in a white pill bar (catalogue), solid = separate white chips (FAQ) */
  tone?: "pill" | "solid";
};

/** Toggle-button group; scrolls horizontally on small screens instead of wrapping. */
export function FilterChips({ label, options, value, onChange, tone = "pill" }: FilterChipsProps) {
  const groupClass =
    tone === "pill"
      ? "flex max-w-full gap-1.5 overflow-x-auto rounded-full border border-kaasen-blue/10 bg-white p-1.5 scrollbar-none lg:flex-wrap"
      : "flex max-w-full gap-1.5 overflow-x-auto scrollbar-none lg:flex-wrap";

  return (
    <div role="group" aria-label={label} className={groupClass}>
      {options.map((option) => {
        const active = option === value;
        const chipClass =
          tone === "pill"
            ? `rounded-full border-0 px-4 py-[9px] text-[13px] font-semibold ${active ? "bg-kaasen-blue text-kaasen-yellow" : "bg-transparent text-kaasen-blue hover:bg-kaasen-blue/6"}`
            : `rounded-full border px-4 py-2.5 text-[12.5px] font-bold tracking-[.02em] ${active ? "border-kaasen-blue bg-kaasen-blue text-kaasen-yellow" : "border-white bg-white text-kaasen-blue hover:border-kaasen-blue"}`;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option)}
            className={`min-h-10 flex-shrink-0 whitespace-nowrap transition-colors duration-200 ${chipClass}`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
