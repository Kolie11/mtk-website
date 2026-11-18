"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { blockDefaults, blockTypes, pageToBlocks, type BlockType, type PageBlock } from "@/lib/admin/pageBuilder";
import { saveAdminChange } from "@/lib/api/admin";
import type { Product, ProductPage } from "@/lib/types";
import { AdminPanel } from "./AdminPanel";
import { BlockEditor } from "./BlockEditor";
import { BlockPreview } from "./BlockPreview";

type PageBuilderProps = { pages: ProductPage[]; products: Product[] };

/** Baukasten: compose a product page from blocks (add, reorder, edit, remove) with live preview. */
export function PageBuilder({ pages, products }: PageBuilderProps) {
  const [slug, setSlug] = useState(pages[0]?.productSlug ?? "");
  const [blocksBySlug, setBlocksBySlug] = useState<Record<string, PageBlock[]>>(() =>
    Object.fromEntries(pages.map((page) => [page.productSlug, pageToBlocks(page)])),
  );
  const [published, setPublished] = useState<Record<string, boolean>>(() => Object.fromEntries(pages.map((page) => [page.productSlug, true])));
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const blocks = blocksBySlug[slug] ?? [];
  const product = products.find((candidate) => candidate.slug === slug);
  const isPublished = published[slug] ?? false;

  function setBlocks(update: (current: PageBlock[]) => PageBlock[]) {
    setBlocksBySlug((all) => ({ ...all, [slug]: update(all[slug] ?? []) }));
  }

  function addBlock(type: BlockType) {
    const [title, text] = blockDefaults[type];
    const id = `${slug}-${type}-${Date.now()}`;
    setBlocks((current) => [...current, { id, type, title, text }]);
    setSelectedId(id);
  }

  function move(index: number, delta: number) {
    setBlocks((current) => {
      const target = index + delta;
      if (target < 0 || target >= current.length) return current;
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  function togglePublished() {
    const next = !isPublished;
    setPublished((all) => ({ ...all, [slug]: next }));
    void saveAdminChange(`product-pages/${slug}`, { published: next, blocks });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="flex min-w-0 flex-col gap-6">
        <AdminPanel
          title="Produktseite"
          actions={
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-micro font-bold ${isPublished ? "bg-success/20 text-success" : "bg-sand text-ink/70"}`}>
                {isPublished ? "Veröffentlicht" : "Entwurf"}
              </span>
              <button type="button" onClick={togglePublished} className={buttonClass("outline", "sm")}>
                {isPublished ? "Zurück zu Entwurf" : "Veröffentlichen"}
              </button>
            </div>
          }
        >
          <label className="flex flex-col gap-1 text-micro font-semibold text-kaasen-blue">
            Verknüpfter Shopartikel
            <select
              value={slug}
              onChange={(event) => {
                setSlug(event.target.value);
                setSelectedId(null);
              }}
              className="rounded-input border border-line-strong bg-white px-3.5 py-3 text-sm text-ink focus:border-kaasen-blue focus:outline-none"
            >
              {pages.map((page) => (
                <option key={page.productSlug} value={page.productSlug}>
                  {products.find((candidate) => candidate.slug === page.productSlug)?.name ?? page.productSlug}
                </option>
              ))}
            </select>
          </label>
        </AdminPanel>

        <AdminPanel title="Bausteine hinzufügen">
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,160px),1fr))] gap-2 p-0">
            {(Object.keys(blockTypes) as BlockType[]).map((type) => (
              <li key={type}>
                <button type="button" onClick={() => addBlock(type)} className="flex w-full flex-col gap-0.5 rounded-input border border-line-strong bg-cream px-3 py-2.5 text-left hover:border-kaasen-blue">
                  <strong className="text-small text-kaasen-blue">+ {blockTypes[type].label}</strong>
                  <span className="text-[11.5px] text-ink/60">{blockTypes[type].hint}</span>
                </button>
              </li>
            ))}
          </ul>
        </AdminPanel>

        <AdminPanel title={`Aufbau der Seite · ${blocks.length} Bausteine`}>
          {blocks.length === 0 ? (
            <p className="m-0 text-small text-ink/60">Noch keine Bausteine. Wählen Sie oben einen Baustein aus.</p>
          ) : (
            <ol className="m-0 flex list-none flex-col gap-2 p-0">
              {blocks.map((block, index) => (
                <BlockEditor
                  key={block.id}
                  block={block}
                  index={index}
                  total={blocks.length}
                  open={selectedId === block.id}
                  productLabel={product ? `${product.name} · ${product.price.label}` : ""}
                  onToggle={() => setSelectedId((current) => (current === block.id ? null : block.id))}
                  onChange={(patch) => setBlocks((current) => current.map((b) => (b.id === block.id ? { ...b, ...patch } : b)))}
                  onMove={(delta) => move(index, delta)}
                  onRemove={() => setBlocks((current) => current.filter((b) => b.id !== block.id))}
                />
              ))}
            </ol>
          )}
        </AdminPanel>
      </div>

      <AdminPanel title="Vorschau">
        <p className="m-0 font-mono text-micro text-ink/60">medizintechnik-kaasen.de/produkte/{slug}</p>
        <div className="flex flex-col gap-3 rounded-field border border-line bg-cream p-4">
          {blocks.map((block) => (
            <BlockPreview key={block.id} block={block} product={product} highlighted={selectedId === block.id} />
          ))}
        </div>
      </AdminPanel>
    </div>
  );
}
