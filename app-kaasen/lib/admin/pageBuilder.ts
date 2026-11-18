// Baukasten (product page builder) model. A ProductPage is edited as an ordered list of blocks;
// the backend stores pages exactly in this block form (docs/BACKEND.md §2.3).
import type { ProductPage } from "@/lib/types";

export type BlockType = "hero" | "benefits" | "audience" | "gallery" | "insurance" | "text" | "faq" | "price";

export type PageBlock = { id: string; type: BlockType; title: string; text: string };

export const blockTypes: Record<BlockType, { label: string; hint: string; textLabel: string; auto?: boolean }> = {
  hero: { label: "Kopfbereich", hint: "Titel, Text, Produktbild", textLabel: "Text" },
  benefits: { label: "Vorteile", hint: "Liste mit Häkchen", textLabel: "Punkte (einer pro Zeile)" },
  audience: { label: "Für wen?", hint: "Zielgruppen als Kacheln", textLabel: "Zielgruppen (eine pro Zeile)" },
  gallery: { label: "Galerie", hint: "Bilder oder App-Screens", textLabel: "Bildunterschriften (eine pro Zeile)" },
  insurance: { label: "Kassenleistung", hint: "HMV-Nr., Diagnosen, Rezept", textLabel: "Angaben (eine pro Zeile)" },
  text: { label: "Textblock", hint: "Freier Absatz", textLabel: "Text" },
  faq: { label: "FAQ", hint: "Fragen zum Aufklappen", textLabel: "Fragen (eine pro Zeile)" },
  price: { label: "Preis & Kaufen", hint: "Aus dem Shopartikel", textLabel: "", auto: true },
};

export const blockDefaults: Record<BlockType, [string, string]> = {
  hero: ["Neuer Kopfbereich", "Kurzer Einleitungstext."],
  benefits: ["Ihre Vorteile", "Vorteil 1\nVorteil 2\nVorteil 3"],
  audience: ["Für wen geeignet?", "Nach der Geburt\nIn den Wechseljahren\nNach Operationen"],
  gallery: ["Galerie", "Bild 1\nBild 2\nBild 3"],
  insurance: ["Mit Rezept zur Krankenkasse", "Hilfsmittelnummer: …\nBeispieldiagnosen: …"],
  text: ["Überschrift", "Absatz mit weiteren Informationen."],
  faq: ["Häufige Fragen", "Frage 1\nFrage 2"],
  price: ["", ""],
};

export const splitLines = (text: string) =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

/** Converts the structured product page into editable blocks. */
export function pageToBlocks(page: ProductPage): PageBlock[] {
  const blocks: Omit<PageBlock, "id">[] = [
    { type: "hero", title: page.headline, text: page.claim },
    { type: "benefits", title: "Kurz erklärt", text: page.features.join("\n") },
    page.kind === "smart"
      ? { type: "gallery", title: "So sieht das Training in der App aus.", text: page.screens.map((screen) => screen.title).join("\n") }
      : { type: "text", title: "Funktionsweise", text: page.steps.map((step) => `${step.title}: ${step.text}`).join("\n") },
    { type: "audience", title: "Für wen geeignet?", text: page.suitability.map((item) => item.title).join("\n") },
    { type: "insurance", title: "Mit Rezept zur Krankenkasse", text: `Hilfsmittelnummer: ${page.aidNumber}\nBeispieldiagnosen: ${page.diagnoses}` },
    { type: "faq", title: "Häufige Fragen", text: page.faqs.map((faq) => faq.question).join("\n") },
    { type: "price", title: "", text: "" },
  ];
  return blocks.map((block, index) => ({ ...block, id: `${page.productSlug}-b${index + 1}` }));
}
