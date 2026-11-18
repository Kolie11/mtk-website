import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { BackLink } from "@/components/layout/BackLink";
import { ProductImage } from "@/components/product/ProductImage";
import { buttonClass } from "@/components/ui/buttonStyles";
import type { BannerTone, Product, ProductPage } from "@/lib/types";
import { ProductToc } from "./ProductToc";

const bannerClass: Record<BannerTone, string> = {
  yellow: "bg-kaasen-yellow",
  lavender: "bg-lavender",
  white: "bg-white",
};

type ProductHeroProps = { product: Product; page: ProductPage };

/** Product page head: claim, prescription CTA first (insurance is primary), buying secondary. */
export function ProductHero({ product, page }: ProductHeroProps) {
  const isPriced = product.price.amount !== null;
  const isInsuranceProduct = product.insurance === "listed" || product.insurance === "unlisted";

  return (
    <section id="p-top" aria-labelledby="product-title" className={`overflow-hidden px-gutter pb-section-sm pt-[clamp(24px,3vw,40px)] max-[800px]:px-4 ${bannerClass[page.banner]}`}>
      <div className="mx-auto flex max-w-site flex-col gap-[clamp(22px,3vw,36px)]">
        <BackLink href="/produkte">Alle Produkte</BackLink>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-[clamp(24px,4vw,56px)]">
          <div className="flex flex-col gap-[18px]">
            <span className="inline-flex w-max items-center rounded-full bg-kaasen-blue px-4 py-2 text-eyebrow font-bold uppercase tracking-[.1em] text-kaasen-yellow">
              {page.categoryLabel}
            </span>
            <h1 id="product-title" className="text-h1-product tracking-display">
              {product.name}
            </h1>
            <p className="m-0 max-w-[30em] text-lg leading-[1.6] text-kaasen-blue/82">{page.claim}</p>
            <div className="mt-1 flex flex-wrap gap-2.5">
              {isInsuranceProduct && (
                <a href="#p-versorgung" className={buttonClass("primary", "md")}>
                  Als Kassenleistung erhalten
                </a>
              )}
              <a href="#p-kontakt" className={buttonClass(isInsuranceProduct ? "light" : "primary", "md")}>
                Beratung anfragen
              </a>
            </div>
            <div className="mt-1.5 flex max-w-[34em] flex-wrap items-center gap-x-5 gap-y-3 rounded-tile border border-kaasen-blue/10 bg-white/75 px-5 py-4">
              <span className="flex min-w-[150px] flex-1 flex-col gap-0.5">
                <span className="label-caps text-kaasen-blue/75">{isInsuranceProduct ? "Oder direkt kaufen" : "Direkt kaufen"}</span>
                <strong className="text-[22px] font-extrabold text-kaasen-blue">{isPriced ? product.price.label : "Preis folgt"}</strong>
                <span className="text-[11.5px] leading-[1.5] text-ink/72">
                  inkl. MwSt., zzgl.{" "}
                  <Link href="/versand" className="text-kaasen-blue underline">
                    Versandkosten
                  </Link>
                </span>
              </span>
              {isPriced ? (
                <AddToCartButton product={product} label="Kaufen" variant="outline" size="md" />
              ) : (
                <a href="#p-kontakt" className={buttonClass("outline", "md")}>
                  Anfragen
                </a>
              )}
              <span className="w-full text-[11.5px] leading-[1.5] text-ink/68">
                Es gelten unsere{" "}
                <Link href="/agb" className="text-kaasen-blue underline">AGB</Link> und die{" "}
                <Link href="/widerrufsbelehrung" className="text-kaasen-blue underline">Widerrufsbelehrung</Link>.
              </span>
            </div>
          </div>
          <figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-hero bg-white shadow-[0_40px_80px_-46px_rgb(20_28_92/.55)] max-sm:aspect-[3/2] max-sm:rounded-[16px]">
            <ProductImage image={product.image} alt={product.name} priority sizes="(max-width: 800px) 100vw, 50vw" padClass="p-6" />
          </figure>
        </div>
        <ProductToc showCare={isInsuranceProduct} />
      </div>
    </section>
  );
}
