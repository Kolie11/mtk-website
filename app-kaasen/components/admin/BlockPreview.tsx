import { splitLines, type PageBlock } from "@/lib/admin/pageBuilder";
import type { Product } from "@/lib/types";

type BlockPreviewProps = { block: PageBlock; product: Product | undefined; highlighted: boolean };

/** Simplified rendering of one block for the Baukasten preview. */
export function BlockPreview({ block, product, highlighted }: BlockPreviewProps) {
  const items = splitLines(block.text);
  const frame = `rounded-input p-4 ${highlighted ? "outline-2 outline-dashed outline-accent" : ""}`;

  switch (block.type) {
    case "hero":
      return (
        <div className={`${frame} bg-kaasen-yellow`}>
          <span className="label-caps text-kaasen-blue/70">{product?.name}</span>
          <h3 className="m-0 mt-1 text-xl">{block.title}</h3>
          <p className="m-0 mt-1 text-small text-kaasen-blue/80">{block.text}</p>
        </div>
      );
    case "benefits":
    case "audience":
      return (
        <div className={`${frame} bg-white`}>
          <h3 className="m-0 text-base">{block.title}</h3>
          <ul className="m-0 mt-2 flex flex-col gap-1 pl-0 text-small">
            {items.map((item) => (
              <li key={item} className="list-none">✓ {item}</li>
            ))}
          </ul>
        </div>
      );
    case "gallery":
      return (
        <div className={`${frame} bg-kaasen-blue text-cream`}>
          <h3 className="m-0 text-base text-cream">{block.title}</h3>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {items.map((item) => (
              <span key={item} className="grid aspect-[9/16] place-items-center rounded-input bg-cream/10 p-1 text-center text-[11px]">{item}</span>
            ))}
          </div>
        </div>
      );
    case "insurance":
      return (
        <div className={`${frame} bg-lavender`}>
          <h3 className="m-0 text-base">{block.title}</h3>
          {items.map((item) => (
            <p key={item} className="m-0 mt-1 text-small">{item}</p>
          ))}
          <span className="mt-2 inline-block rounded-full bg-kaasen-blue px-3 py-1.5 text-micro font-bold text-kaasen-yellow">Rezept hochladen</span>
        </div>
      );
    case "faq":
      return (
        <div className={`${frame} bg-white`}>
          <h3 className="m-0 text-base">{block.title}</h3>
          {items.map((item) => (
            <p key={item} className="m-0 mt-1.5 flex justify-between rounded-input bg-cream px-3 py-2 text-small font-semibold text-kaasen-blue">
              {item} <span aria-hidden="true">+</span>
            </p>
          ))}
        </div>
      );
    case "price":
      return (
        <div className={`${frame} flex items-center justify-between bg-white`}>
          <span className="flex flex-col">
            <span className="label-caps text-kaasen-blue/70">Direkt kaufen</span>
            <strong className="text-lg text-kaasen-blue">{product?.price.label ?? "Preis folgt"}</strong>
            <span className="text-[11px] text-ink/60">inkl. MwSt., zzgl. Versandkosten</span>
          </span>
          <span className="rounded-full bg-kaasen-blue px-3 py-1.5 text-micro font-bold text-kaasen-yellow">Kaufen</span>
        </div>
      );
    default:
      return (
        <div className={`${frame} bg-white`}>
          <h3 className="m-0 text-base">{block.title}</h3>
          <p className="m-0 mt-1 whitespace-pre-line text-small text-ink/75">{block.text}</p>
        </div>
      );
  }
}
