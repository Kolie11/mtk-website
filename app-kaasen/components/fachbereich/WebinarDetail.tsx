"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { formatLongDate, formatShortDate } from "@/lib/format";
import type { Webinar } from "@/lib/types";
import { WebinarRegistrationForm } from "./WebinarRegistrationForm";

const termClass = "font-bold text-kaasen-blue/75";

/** Detail panel; per webinar either "Zum Webinar anmelden" or "Keine Anmeldung erforderlich" (CMS flag). */
export function WebinarDetail({ webinar }: { webinar: Webinar }) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="flex flex-col gap-[18px] rounded-panel bg-white p-[clamp(22px,3vw,32px)] text-ink">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-kaasen-yellow px-[11px] py-[5px] text-[11px] font-bold uppercase tracking-[.08em] text-kaasen-blue">
          {formatShortDate(webinar.date)}
        </span>
        <span className="rounded-full bg-tag-bg px-[11px] py-[5px] text-[11px] font-bold text-accent">{webinar.product}</span>
      </div>
      <h3 className="m-0 text-[clamp(22px,2.4vw,30px)] leading-[1.18]">{webinar.title}</h3>
      <dl className="m-0 grid grid-cols-[auto_minmax(0,1fr)] gap-x-[18px] gap-y-2.5 text-[14.5px] leading-[1.5]">
        <dt className={termClass}>Thema</dt>
        <dd className="m-0 [text-wrap:pretty]">{webinar.topic}</dd>
        <dt className={termClass}>Datum</dt>
        <dd className="m-0">{formatLongDate(webinar.date)}</dd>
        <dt className={termClass}>Uhrzeit</dt>
        <dd className="m-0">{webinar.time}</dd>
        <dt className={termClass}>Moderation</dt>
        <dd className="m-0">{webinar.host}</dd>
        <dt className={termClass}>Plattform</dt>
        <dd className="m-0">
          <a href={webinar.url} target="_blank" rel="noopener noreferrer" className="font-bold text-kaasen-blue underline">
            {webinar.platform}
          </a>
        </dd>
      </dl>
      {webinar.registrationRequired ? (
        formOpen ? (
          <WebinarRegistrationForm webinarId={webinar.id} />
        ) : (
          <button type="button" onClick={() => setFormOpen(true)} className={buttonClass("primary", "lg", "self-start text-[14.5px]")}>
            Zum Webinar anmelden
          </button>
        )
      ) : (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-field border border-kaasen-blue/10 bg-cream px-4 py-3.5">
          <span className="text-sm text-kaasen-blue">
            <strong>Keine Anmeldung erforderlich.</strong> Einfach zum Termin über den Link teilnehmen.
          </span>
          <a href={webinar.url} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "sm", "text-[13.5px]")}>
            Zum Webinar
          </a>
        </div>
      )}
    </div>
  );
}
