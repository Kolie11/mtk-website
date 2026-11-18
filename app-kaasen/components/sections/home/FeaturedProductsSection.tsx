import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { buttonClass } from "@/components/ui/buttonStyles";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { RevealSection } from "@/components/ui/RevealSection";
import { productCatalog } from "@/lib/data/site";
import type { Product } from "@/lib/types";

export function FeaturedProductsSection({ products }: { products: Product[] }) {
  return (
    <RevealSection id="kProdukte" aria-labelledby="produkte-title" className="px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto max-w-site">
        <div className="mb-[clamp(28px,3vw,44px)] flex flex-wrap items-end justify-between gap-[26px]">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>{productCatalog.eyebrow}</Eyebrow>
            <h2 id="produkte-title" className="text-h2-lg">
              {productCatalog.featuredTitleStart} <Highlight>{productCatalog.featuredTitleHighlight}</Highlight>.
            </h2>
          </div>
          <Link href="/produkte" className={buttonClass("primary", "md")}>
            {productCatalog.featuredCta}
            <ArrowRightIcon size={16} strokeWidth={2.4} />
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,270px),1fr))] gap-[18px] min-[801px]:max-lg:grid-cols-2 max-[800px]:grid-cols-1">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
