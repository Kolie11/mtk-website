"use client";

import { useState } from "react";
import { parseIsoDate } from "@/lib/format";
import type { Webinar } from "@/lib/types";
import { ProSectionHeading } from "./ProSectionHeading";
import { WebinarCalendar } from "./WebinarCalendar";
import { WebinarDetail } from "./WebinarDetail";

/** Block 5: month calendar + detail panel. */
export function WebinarSection({ webinars }: { webinars: Webinar[] }) {
  const first = webinars[0];
  const [selectedId, setSelectedId] = useState<string | null>(first?.id ?? null);
  const [month, setMonth] = useState(() => {
    const date = first ? parseIsoDate(first.date) : new Date();
    return { year: date.getFullYear(), index: date.getMonth() };
  });

  const selected = webinars.find((webinar) => webinar.id === selectedId) ?? first;

  function selectWebinar(webinar: Webinar) {
    const date = parseIsoDate(webinar.date);
    setSelectedId(webinar.id);
    setMonth({ year: date.getFullYear(), index: date.getMonth() });
  }

  return (
    <section id="fWebinare" aria-labelledby="f-webinare-title" className="scroll-mt-20 bg-kaasen-blue px-gutter py-[clamp(56px,7vw,96px)] text-cream max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-8">
        <ProSectionHeading id="f-webinare-title" eyebrow="Webinare" titleStart="Fortbildung" titleHighlight="im Kalender" onDark>
          <p className="m-0 text-body leading-[1.65] text-cream/78">Termin anklicken, um Details und Plattform-Link zu sehen.</p>
        </ProSectionHeading>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-start gap-5">
          <WebinarCalendar
            webinars={webinars}
            year={month.year}
            monthIndex={month.index}
            selectedId={selected?.id ?? null}
            onMonthChange={(year, index) => setMonth({ year, index })}
            onSelect={selectWebinar}
          />
          {selected ? <WebinarDetail key={selected.id} webinar={selected} /> : <p className="m-0 text-cream/80">Aktuell sind keine Webinare geplant.</p>}
        </div>
      </div>
    </section>
  );
}
