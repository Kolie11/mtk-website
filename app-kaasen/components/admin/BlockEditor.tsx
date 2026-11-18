"use client";

import { blockTypes, splitLines, type PageBlock } from "@/lib/admin/pageBuilder";

type BlockEditorProps = {
  block: PageBlock;
  index: number;
  total: number;
  open: boolean;
  productLabel: string;
  onToggle: () => void;
  onChange: (patch: Partial<PageBlock>) => void;
  onMove: (delta: number) => void;
  onRemove: () => void;
};

const iconButton = "grid size-8 place-items-center rounded-full border border-line-strong bg-white text-kaasen-blue hover:bg-kaasen-blue hover:text-kaasen-yellow disabled:opacity-35";
const inputClass = "w-full rounded-input border border-line-strong bg-white px-3 py-2.5 text-sm text-ink focus:border-kaasen-blue focus:outline-none";

export function BlockEditor({ block, index, total, open, productLabel, onToggle, onChange, onMove, onRemove }: BlockEditorProps) {
  const type = blockTypes[block.type];
  const summary = type.auto ? productLabel : block.title || splitLines(block.text)[0] || "";
  const panelId = `block-panel-${block.id}`;

  return (
    <li className={`rounded-field border ${open ? "border-2 border-kaasen-blue bg-cream" : "border-line-strong bg-white"}`}>
      <div className="flex items-center gap-2 p-3">
        <span aria-hidden="true" className="grid size-7 flex-none place-items-center rounded-full bg-kaasen-blue text-micro font-bold text-kaasen-yellow">
          {index + 1}
        </span>
        <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={panelId} className="flex min-w-0 flex-1 flex-col border-0 bg-transparent text-left">
          <strong className="text-small text-kaasen-blue">{type.label}</strong>
          <span className="truncate text-micro text-ink/60">{summary}</span>
        </button>
        <button type="button" onClick={() => onMove(-1)} disabled={index === 0} aria-label={`${type.label} nach oben`} className={iconButton}>
          ↑
        </button>
        <button type="button" onClick={() => onMove(1)} disabled={index === total - 1} aria-label={`${type.label} nach unten`} className={iconButton}>
          ↓
        </button>
        <button type="button" onClick={onRemove} aria-label={`${type.label} entfernen`} className={iconButton}>
          ×
        </button>
      </div>
      {open && (
        <div id={panelId} className="flex flex-col gap-3 border-t border-line p-3">
          {type.auto ? (
            <p className="m-0 text-small text-ink/70">Preis und „Kaufen“-Button kommen automatisch aus dem verknüpften Shopartikel ({productLabel}).</p>
          ) : (
            <>
              <label className="flex flex-col gap-1 text-micro font-semibold text-kaasen-blue">
                Überschrift
                <input value={block.title} onChange={(event) => onChange({ title: event.target.value })} className={inputClass} />
              </label>
              <label className="flex flex-col gap-1 text-micro font-semibold text-kaasen-blue">
                {type.textLabel}
                <textarea rows={4} value={block.text} onChange={(event) => onChange({ text: event.target.value })} className={`${inputClass} resize-y`} />
              </label>
              {block.type === "gallery" && <p className="m-0 rounded-input border border-dashed border-line-strong p-3 text-center text-micro text-ink/60">Bilder hierher ziehen (JPG, PNG) — Upload folgt mit dem Backend.</p>}
            </>
          )}
        </div>
      )}
    </li>
  );
}
