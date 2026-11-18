"use client";

import { useState } from "react";
import { prescription } from "@/lib/data/site";

const termTone = {
  yellow: "text-kaasen-yellow",
  lavender: "text-lavender",
  cream: "text-cream",
} as const;

const boxClass = "flex flex-col gap-2.5 rounded-[16px] border border-cream/18 bg-cream/7 px-[18px] py-4";
const headClass = "m-0 flex items-center gap-2 text-eyebrow font-bold uppercase tracking-label";

/** "Mögliche Kassenleistung": listed / not listed / sale only + expandable explanation. */
export function CoverageOverview() {
  const [explainOpen, setExplainOpen] = useState(false);
  const { coverage } = prescription;

  return (
    <div className="mt-1 flex flex-col gap-2.5">
      <h3 className="m-0 text-eyebrow font-bold uppercase tracking-label text-cream">{coverage.title}</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-2.5">
        <div className={boxClass}>
          <h4 className={`${headClass} text-kaasen-yellow`}>
            <span aria-hidden="true" className="block size-2 rounded-full bg-kaasen-yellow" />
            {coverage.listedLabel}
          </h4>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {coverage.listed.map((name) => (
              <li key={name} className="rounded-full bg-kaasen-yellow px-3 py-1.5 text-[12.5px] font-bold text-kaasen-blue">
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className={boxClass}>
          <h4 className={`${headClass} text-lavender`}>
            <span aria-hidden="true" className="block size-2 rounded-full border-2 border-lavender" />
            {coverage.unlistedLabel}
          </h4>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {coverage.unlisted.map((name) => (
              <li key={name} className="rounded-full border-[1.5px] border-lavender px-[11px] py-[5px] text-[12.5px] font-semibold text-cream">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 rounded-[16px] border border-dashed border-cream/30 px-[18px] py-4">
        <h4 className={`${headClass} text-cream`}>
          <span aria-hidden="true" className="block size-2 rounded-[2px] bg-cream" />
          {coverage.saleLabel}
        </h4>
        <p className="m-0 text-small leading-[1.55] text-cream/86">{coverage.saleText}</p>
        <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
          {coverage.sale.map((name) => (
            <li key={name} className="rounded-full bg-cream/12 px-[11px] py-[5px] text-[12.5px] font-semibold text-cream">
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-[16px] border border-cream/14 bg-cream/5">
        <button
          type="button"
          aria-expanded={explainOpen}
          aria-controls="coverage-explain"
          onClick={() => setExplainOpen((open) => !open)}
          className="flex w-full items-center justify-between gap-3.5 border-0 bg-transparent px-[18px] py-3.5 text-left text-sm font-bold text-cream hover:text-kaasen-yellow"
        >
          {coverage.explainLabel}
          <span aria-hidden="true" className="grid size-6 flex-none place-items-center rounded-full bg-kaasen-yellow text-sm font-extrabold text-kaasen-blue">
            {explainOpen ? "−" : "+"}
          </span>
        </button>
        <div id="coverage-explain" hidden={!explainOpen} className="flex flex-col gap-2.5 px-[18px] pb-4 text-sm leading-[1.6] text-cream/86">
          {coverage.explain.map((entry) => (
            <p key={entry.term} className="m-0">
              <strong className={termTone[entry.tone]}>{entry.term}</strong> {entry.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
