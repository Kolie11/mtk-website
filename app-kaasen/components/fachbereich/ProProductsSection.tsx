import type { Product } from "@/lib/types";
import { ProProductCard } from "./ProProductCard";
import { ProSectionHeading } from "./ProSectionHeading";

/** Block 3: product overview with accessories, pro prices (login) and documents (login). */
export function ProProductsSection({ products }: { products: Product[] }) {
  return (
    <section id="fProdukte" aria-labelledby="f-produkte-title" className="scroll-mt-20 bg-white px-gutter py-[clamp(56px,7vw,96px)] max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-8">
        <ProSectionHeading id="f-produkte-title" eyebrow="Produktübersicht" titleStart="Acht Hilfsmittel," titleHighlight="ein Ansprechpartner" />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-3.5 p-0 max-sm:grid-cols-1">
          {products.map((product) => (
            <li key={product.id} className="flex">
              <ProProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
