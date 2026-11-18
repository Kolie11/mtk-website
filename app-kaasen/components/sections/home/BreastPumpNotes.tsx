"use client";

import { useId } from "react";
import { useSingleOpen } from "@/components/ui/useSingleOpen";
import type { BreastPumpNote, NoteBlock } from "@/lib/data/site";

function NoteBlockView({ block }: { block: NoteBlock }) {
  if (block.kind === "list") {
    return (
      <ul className="m-0 flex flex-col gap-1.5 pl-[18px]">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.kind === "heading") return <strong className="text-kaasen-blue">{block.text}</strong>;
  return (
    <p className="m-0">
      {block.strong && <strong className="text-kaasen-blue">{block.strong} </strong>}
      {block.text}
    </p>
  );
}

/** "Hinweise" accordion — only one item open at a time (first open by default). */
export function BreastPumpNotes({ notes }: { notes: BreastPumpNote[] }) {
  const { openIndex, toggle } = useSingleOpen(0);
  const baseId = useId();

  return (
    <div className="flex flex-col overflow-hidden rounded-[16px] border border-kaasen-blue/12 bg-white">
      <h3 className="m-0 px-[18px] py-3.5 text-micro font-bold uppercase tracking-label text-accent">Hinweise</h3>
      {notes.map((note, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-${index}`;
        return (
          <div key={note.title} className="border-t border-kaasen-blue/10">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-3 border-0 bg-transparent px-[18px] py-3.5 text-left text-[14.5px] font-bold text-kaasen-blue hover:text-accent"
            >
              {note.title}
              <span aria-hidden="true" className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
                ›
              </span>
            </button>
            <div id={panelId} hidden={!isOpen} className="flex flex-col gap-2.5 px-[18px] pb-4 text-small leading-[1.65] text-ink/80">
              {note.blocks.map((block, blockIndex) => (
                <NoteBlockView key={blockIndex} block={block} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
