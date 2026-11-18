import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Product, ProductPage } from "@/lib/types";

/** Block "FAQ" (#p-faq). */
export function ProductFaqSection({ product, page }: { product: Product; page: ProductPage }) {
  if (page.faqs.length === 0) return null;
  return (
    <section id="p-faq" aria-labelledby="p-faq-title" className="scroll-mt-[90px] px-gutter pb-section max-[800px]:px-4">
      <div className="mx-auto flex max-w-narrow flex-col gap-[clamp(20px,2.4vw,32px)]">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="p-faq-title" className="text-h2-sm">
            Häufige Fragen zu {product.name}
          </h2>
        </div>
        <FaqAccordion items={page.faqs} tone="white" />
      </div>
    </section>
  );
}
