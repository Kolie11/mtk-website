import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalPage } from "@/lib/api/content";
import type { LegalPage } from "@/lib/types";

/** Shared loader for the five legal routes (/impressum, /datenschutz, …). */
export async function loadLegalPage(slug: string): Promise<LegalPage> {
  const page = await getLegalPage(slug);
  if (!page) notFound();
  return page;
}

export function legalMetadata(slug: string, title: string, description: string): Metadata {
  return { title, description, alternates: { canonical: `/${slug}` } };
}
