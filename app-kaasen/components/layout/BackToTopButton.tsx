"use client";

import { ArrowUpIcon } from "@/components/ui/Icons";

export function BackToTopButton() {
  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Nach oben"
      title="Nach oben"
      className="grid size-11 flex-none place-items-center rounded-full bg-kaasen-yellow text-kaasen-blue transition-transform hover:-translate-y-[3px]"
    >
      <ArrowUpIcon size={18} strokeWidth={2.6} />
    </button>
  );
}
