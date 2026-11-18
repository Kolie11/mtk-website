import { AddToCartButton } from "@/components/cart/AddToCartButton";
import type { Product } from "@/lib/types";
import { ProductImage } from "./ProductImage";

/** Shop card — sale products only, so the price IS shown here (incl. VAT). */
export function ShopProductCard({ product }: { product: Product }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-card border border-line bg-white transition-[transform,box-shadow] duration-350 ease-soft hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] flex-none overflow-hidden" style={{ backgroundColor: product.image?.background ?? "#ffffff" }}>
        <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-kaasen-blue px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.1em] text-kaasen-yellow">
          {product.category}
        </span>
        <ProductImage image={product.image} alt={product.name} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-5 pb-[22px] pt-5">
        <h2 className="m-0 text-lg leading-[1.25]">{product.name}</h2>
        <p className="m-0 text-small leading-[1.6] text-ink/70">{product.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2.5 border-t border-line pt-3.5">
          <span className="flex flex-col">
            <strong className="text-lg font-extrabold text-kaasen-blue">{product.price.label}</strong>
            <span className="text-[11px] text-ink/60">inkl. MwSt.</span>
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
