"use client";

import { useState } from "react";

/** Accordion state where at most one item is open at a time. */
export function useSingleOpen(initialIndex: number | null = null) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialIndex);
  const toggle = (index: number) => setOpenIndex((current) => (current === index ? null : index));
  return { openIndex, toggle, setOpenIndex };
}
