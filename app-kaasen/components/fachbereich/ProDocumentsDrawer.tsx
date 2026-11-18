"use client";

import { proDocumentTypes } from "@/lib/data/proDocuments";
import { formatEuro } from "@/lib/format";
import type { ProDocument, Product } from "@/lib/types";
import { DownloadRow } from "./DownloadRow";
import { DrawerShell } from "./DrawerShell";
import { useProArea } from "./ProAreaProvider";

type ProDocumentsDrawerProps = { products: Product[]; documents: ProDocument[] };

/** Login-only documents per product, grouped by type (Studien, Flyer, IFU, CE/MDR). */
export function ProDocumentsDrawer({ products, documents }: ProDocumentsDrawerProps) {
  const { user, documentsProductId, closeDocuments } = useProArea();
  const product = products.find((candidate) => candidate.id === documentsProductId);
  const open = Boolean(user && product);
  const name = product?.pro?.name ?? product?.name ?? "";
  const productDocuments = documents.filter((doc) => doc.productId === documentsProductId);

  const subtitle = product?.proPrice ? (
    <span className="text-[13px] text-kaasen-blue">
      Fachpersonenpreis: <b>{formatEuro(product.proPrice.amount)}</b> {product.proPrice.unit}
    </span>
  ) : undefined;

  return (
    <DrawerShell open={open} onClose={closeDocuments} titleId="docs-drawer-title" eyebrow="Unterlagen für Fachpersonen" title={name} subtitle={subtitle} widthClass="sm:max-w-[560px]">
      <div className="flex flex-col gap-5 pt-1">
        {proDocumentTypes.map((group) => {
          const items = productDocuments.filter((doc) => doc.type === group.type);
          if (items.length === 0) return null;
          return (
            <section key={group.type} aria-label={group.label} className="flex flex-col gap-2">
              <h3 className="m-0 text-[11px] font-bold uppercase tracking-[.16em] text-kaasen-blue/70">{group.label}</h3>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {items.map((doc) => (
                  <DownloadRow key={doc.id} title={doc.title} format="PDF" url={doc.pdfUrl} />
                ))}
              </ul>
            </section>
          );
        })}
        <span className="text-micro text-ink/65">Platzhalter — die PDFs werden im Admin hochgeladen.</span>
      </div>
    </DrawerShell>
  );
}
