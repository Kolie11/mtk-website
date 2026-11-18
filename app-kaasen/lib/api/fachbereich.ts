// Fachbereich (healthcare professionals) content.
// Backend: GET /webinars, /flyers, /testimonials, /prescriber-infos (public),
// GET /pro/documents?productId= (requires pro session) — see docs/BACKEND.md §4.
import { prescriberInfos } from "@/lib/data/fachbereich";
import { flyers } from "@/lib/data/flyers";
import { proDocuments } from "@/lib/data/proDocuments";
import { testimonials } from "@/lib/data/testimonials";
import { webinars } from "@/lib/data/webinars";
import type { Flyer, PrescriberInfo, ProDocument, Testimonial, Webinar } from "@/lib/types";

export async function getWebinars(): Promise<Webinar[]> {
  return [...webinars].sort((a, b) => a.date.localeCompare(b.date));
}

export async function getFlyers(): Promise<Flyer[]> {
  return flyers;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getPrescriberInfos(): Promise<PrescriberInfo[]> {
  return prescriberInfos;
}

/**
 * Login-only documents. In phase 1 the list is static and only gated in the UI;
 * the real endpoint must check the pro session token server-side.
 */
export async function getProDocuments(productId?: string): Promise<ProDocument[]> {
  return productId ? proDocuments.filter((doc) => doc.productId === productId) : proDocuments;
}
