import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Product, ProductPage } from "@/lib/types";

/** Block "Eignung" (#p-eignung). */
export function ProductSuitabilitySection({ product, page }: { product: Product; page: ProductPage }) {
  return (
    <section id="p-eignung" aria-labelledby="p-eignung-title" className="scroll-mt-[90px] px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-stack">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>Eignung</Eyebrow>
          <h2 id="p-eignung-title" className="text-h2-md">
            Für wen ist {product.name} geeignet?
          </h2>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-3.5 p-0">
          {page.suitability.map((item) => (
            <li key={item.title} className="flex flex-col gap-2.5 rounded-card border border-line bg-white p-[26px] max-sm:p-[18px]">
              <strong className="text-lg font-bold leading-[1.3] text-kaasen-blue">{item.title}</strong>
              <span className="text-[14.5px] leading-[1.65] text-ink/70">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
