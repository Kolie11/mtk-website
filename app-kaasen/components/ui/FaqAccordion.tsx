"use client";

import { useId } from "react";
import { useSingleOpen } from "./useSingleOpen";

type FaqItem = { question: string; answer: string };

type FaqAccordionProps = {
  items: FaqItem[];
  /** cream = home FAQ on lavender background, white = product pages */
  tone?: "cream" | "white";
  initialOpen?: number | null;
};

const itemTone = {
  cream: "bg-cream",
  white: "border border-line bg-white",
};

/** FAQ list — only one answer open at a time, animated height. */
export function FaqAccordion({ items, tone = "cream", initialOpen = 0 }: FaqAccordionProps) {
  const { openIndex, toggle } = useSingleOpen(initialOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question} className={`overflow-hidden rounded-tile ${itemTone[tone]}`}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-[18px] border-0 bg-transparent px-6 py-[22px] text-left text-base font-bold text-kaasen-blue hover:text-accent max-sm:text-[15px]"
              >
                {item.question}
                <span aria-hidden="true" className="grid size-7 flex-none place-items-center rounded-full bg-kaasen-yellow text-base font-extrabold text-kaasen-blue">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-[380ms] ease-soft"
            >
              <p className="m-0 max-w-[42em] px-6 pb-[22px] text-[14.5px] leading-[1.7] text-ink/72">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
