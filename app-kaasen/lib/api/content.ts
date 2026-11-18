// Editorial content: FAQ, partners, legal pages.
// Backend: GET /faqs, GET /partners, GET /legal-pages/:slug (see docs/BACKEND.md §3).
import { faqs } from "@/lib/data/faqs";
import { legalPages } from "@/lib/data/legal";
import { partners } from "@/lib/data/partners";
import type { Faq, LegalPage, Partner } from "@/lib/types";

export async function getFaqs(): Promise<Faq[]> {
  return faqs.filter((faq) => faq.visible).sort((a, b) => a.order - b.order);
}

export async function getPartners(): Promise<Partner[]> {
  return partners.filter((partner) => partner.visible);
}

export async function getLegalPage(slug: string): Promise<LegalPage | null> {
  return legalPages.find((page) => page.slug === slug) ?? null;
}
