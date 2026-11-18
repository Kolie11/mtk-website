import { ContactForm } from "@/components/forms/ContactForm";
import { ContactDetailsCard } from "@/components/sections/shared/ContactDetailsCard";
import { MapEmbed } from "@/components/sections/shared/MapEmbed";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Product } from "@/lib/types";

type ProductContactSectionProps = { product: Product; productNames: string[] };

/** Block "Kontakt" (#p-kontakt) with the product preselected. */
export function ProductContactSection({ product, productNames }: ProductContactSectionProps) {
  return (
    <section id="p-kontakt" aria-labelledby="p-kontakt-title" className="scroll-mt-[90px] px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[22px]">
        <div className="flex min-w-0 flex-col gap-5 rounded-modal border border-line bg-white p-[clamp(20px,3.6vw,44px)] max-sm:rounded-tile max-sm:p-4">
          <Eyebrow>Kontakt</Eyebrow>
          <h2 id="p-kontakt-title" className="m-0 text-[clamp(26px,3.2vw,40px)]">
            Fragen zu {product.name}?
          </h2>
          <ContactForm submitLabel="Kontakt anfragen" products={productNames} defaultProduct={product.name} />
        </div>
        <div className="flex flex-col gap-4">
          <MapEmbed />
          <ContactDetailsCard />
        </div>
      </div>
    </section>
  );
}
