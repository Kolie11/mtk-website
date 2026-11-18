"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { ChevronDownIcon } from "@/components/ui/Icons";

type BreastPumpExpanderProps = {
  header: React.ReactNode;
  openLabel: string;
  closeLabel: string;
  children: React.ReactNode;
};

const BODY_ID = "kMilchpumpeBody";

/** Collapsed by default; expands with grid-template-rows 0fr → 1fr (0.65 s). */
export function BreastPumpExpander({ header, openLabel, closeLabel, children }: BreastPumpExpanderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-x-10 gap-y-6">
        {header}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={BODY_ID}
          className={buttonClass("primary", "lg", "flex-none gap-3 px-[26px]")}
        >
          <span>{open ? closeLabel : openLabel}</span>
          <ChevronDownIcon size={16} strokeWidth={2.4} className={`transition-transform duration-[450ms] ease-expand ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div
        id={BODY_ID}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-[650ms] ease-expand ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`pt-[clamp(28px,4vw,44px)] transition-[opacity,transform] [transition-delay:120ms,80ms] [transition-duration:450ms,600ms] ease-expand ${
              open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
