import { Fragment } from "react";
import { tickerItems } from "@/lib/data/site";

function TickerRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <span aria-hidden={hidden || undefined} className="flex gap-11">
      {tickerItems.map((item) => (
        <Fragment key={item}>
          <span className="whitespace-nowrap">{item}</span>
          <span aria-hidden="true" className="text-kaasen-yellow">
            ✦
          </span>
        </Fragment>
      ))}
    </span>
  );
}

/** Brand marquee (paused for reduced motion via global CSS). */
export function TickerSection() {
  return (
    <section aria-label="Unsere Marken" className="overflow-hidden bg-kaasen-blue py-4 text-cream">
      <div className="flex w-max animate-ticker gap-11 text-micro uppercase tracking-[.24em]">
        <TickerRun />
        <TickerRun hidden />
      </div>
    </section>
  );
}
