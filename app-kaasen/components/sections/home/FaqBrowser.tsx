"use client";

import { useState } from "react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FilterChips } from "@/components/ui/FilterChips";
import type { Faq } from "@/lib/types";

type FaqBrowserProps = { faqs: Faq[]; categories: readonly string[] };

export function FaqBrowser({ faqs, categories }: FaqBrowserProps) {
  const [category, setCategory] = useState<string>(categories[0]);
  const visible = faqs.filter((faq) => category === categories[0] || faq.category === category);

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <FilterChips label="FAQ filtern" options={categories} value={category} onChange={setCategory} tone="solid" />
      <FaqAccordion key={category} items={visible} tone="cream" initialOpen={category === categories[0] ? 0 : null} />
    </div>
  );
}
