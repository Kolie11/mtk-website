import Link from "next/link";
import { buttonClass } from "@/components/ui/buttonStyles";
import type { Product } from "@/lib/types";
import { ProductDetailButton } from "./ProductDetailButton";
import { ProductImage } from "./ProductImage";

const cardCta = buttonClass("primary", "sm", "flex-shrink-0 whitespace-nowrap hover:scale-[1.03]");

/**
 * Catalogue card. Business rule: NO price on cards — insurance products show the
 * coverage note instead; buying happens on the product page / detail modal / shop.
 */
export function ProductCard({ product }: { product: Product }) {
  const href = product.isRental ? "/#kMilchpumpe" : product.hasProductPage ? `/produkte/${product.slug}` : null;
  const ctaLabel = product.isRental ? "Onlinebestellung" : "Mehr erfahren";

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-card border border-line bg-white transition-[transform,box-shadow] duration-350 ease-soft hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] flex-none overflow-hidden" style={{ backgroundColor: product.image?.background ?? "#ffffff" }}>
        <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-kaasen-blue px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.1em] text-kaasen-yellow">
          {product.category}
        </span>
        {product.badge && (
          <span className="absolute right-3.5 top-3.5 z-10 rounded-full bg-kaasen-yellow px-3 py-1.5 text-[11px] font-bold tracking-[.06em] text-kaasen-blue">
            {product.badge}
          </span>
        )}
        <ProductImage image={product.image} alt={product.name} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-[22px] pb-6 pt-[22px]">
        <h3 className="text-xl leading-[1.2]">{product.name}</h3>
        <p className="m-0 min-h-[3.2em] text-small leading-[1.6] text-ink/70">{product.description}</p>
        <ul className="m-0 mt-0.5 flex list-none flex-wrap gap-1.5 p-0">
          {product.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-tag-bg px-2.5 py-[5px] text-[11px] font-semibold text-accent">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex min-w-0 items-center justify-between gap-2.5 border-t border-line pt-4">
          <span className="min-w-0 flex-1 text-micro font-semibold leading-[1.35] text-accent">{product.coverageNote}</span>
          {href ? (
            <Link href={href} className={cardCta} aria-label={`${ctaLabel}: ${product.name}`}>
              {ctaLabel}
            </Link>
          ) : (
            <ProductDetailButton product={product} className={cardCta} />
          )}
        </div>
      </div>
    </article>
  );
}
