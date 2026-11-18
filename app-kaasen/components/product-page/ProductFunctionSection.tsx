import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Product, ProductPage } from "@/lib/types";

/** Block "App-Einblick" (smart products) or "Funktionsweise" steps (analog products). */
export function ProductFunctionSection({ product, page }: { product: Product; page: ProductPage }) {
  const isSmart = page.kind === "smart";
  const title = isSmart ? "So sieht das Training in der App aus." : `So funktioniert ${product.name}.`;

  return (
    <section id="p-funktion" aria-labelledby="p-funktion-title" className="scroll-mt-[90px] bg-kaasen-blue px-gutter py-section text-cream max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-[clamp(28px,3vw,44px)]">
        <div className="flex max-w-[44em] flex-col gap-3.5">
          <Eyebrow tone="yellow">{isSmart ? "App-Einblick" : "Funktionsweise"}</Eyebrow>
          <h2 id="p-funktion-title" className="text-h2-md text-cream">
            {title}
          </h2>
        </div>

        {isSmart ? (
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-[clamp(16px,2vw,28px)] p-0">
            {page.screens.map((screen) => (
              <li key={screen.title} className="flex flex-col gap-4">
                <div className="relative grid aspect-[9/16] max-h-[440px] place-items-center overflow-hidden rounded-[30px] border-2 border-cream/18 bg-cream/6 p-5">
                  {screen.image.src ? (
                    <Image
                      src={screen.image.src}
                      alt={screen.title}
                      fill
                      sizes="(max-width: 800px) 100vw, 33vw"
                      className={screen.image.fit === "cover" ? "object-cover" : "object-contain"}
                      style={{ backgroundColor: screen.image.background }}
                    />
                  ) : (
                    <span className="text-center text-[11px] font-bold uppercase tracking-[.16em] text-cream/45">App-Screenshot folgt</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <strong className="text-[17px] font-bold text-kaasen-yellow">{screen.title}</strong>
                  <span className="text-[14.5px] leading-[1.6] text-cream/75">{screen.text}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4 p-0">
            {page.steps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-3.5 rounded-card border border-cream/14 bg-cream/6 p-[26px] max-sm:p-[18px]">
                <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-kaasen-yellow text-body font-extrabold text-kaasen-blue">
                  {index + 1}
                </span>
                <strong className="text-lg font-bold text-cream">{step.title}</strong>
                <span className="text-[14.5px] leading-[1.65] text-cream/75">{step.text}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
