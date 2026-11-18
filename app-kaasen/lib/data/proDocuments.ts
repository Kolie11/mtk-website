// Login-only product documents for healthcare professionals (studies, flyers, IFU, CE/MDR).
// PDFs are uploaded in the admin later — `pdfUrl: null` until then.
import type { ProDocument, ProDocumentType } from "@/lib/types";
import { products } from "@/lib/data/products";

export const proDocumentTypes: { type: ProDocumentType; label: string }[] = [
  { type: "study", label: "Studien" },
  { type: "flyer", label: "Flyer" },
  { type: "ifu", label: "Gebrauchsanweisung" },
  { type: "certificate", label: "Zertifizierungen (CE / MDR)" },
];

const documentTemplate: { type: ProDocumentType; title: (name: string) => string }[] = [
  { type: "study", title: (name) => `Studienergebnisse ${name}` },
  { type: "flyer", title: (name) => `Patientenflyer ${name}` },
  { type: "flyer", title: (name) => `Fachpersonenflyer ${name}` },
  { type: "ifu", title: (name) => `Gebrauchsanweisung ${name}` },
  { type: "certificate", title: () => "EU-Konformitätserklärung (MDR)" },
  { type: "certificate", title: () => "CE-Zertifikat" },
];

export const proDocuments: ProDocument[] = products
  .filter((product) => product.pro)
  .flatMap((product) => {
    const name = product.pro?.name ?? product.name;
    return documentTemplate.map((doc, index) => ({
      id: `${product.id}-${doc.type}-${index + 1}`,
      productId: product.id,
      type: doc.type,
      title: doc.title(name),
      pdfUrl: null,
      loginRequired: true,
    }));
  });
