import type { Metadata } from "next";
import Link from "next/link";
import { BackLink } from "@/components/layout/BackLink";
import { ShopProductCard } from "@/components/product/ShopProductCard";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { getShopProducts } from "@/lib/api/products";
import { shop } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Shop — direkt bestellen",
  description: "Produkte ohne Kassenleistung rund ums Stillen, Abpumpen und die erste Zeit mit Baby. Preise inkl. MwSt., versandkostenfrei ab 100 €.",
  alternates: { canonical: "/shop" },
};

export default async function ShopPage() {
  const products = await getShopProducts();

  return (
    <section aria-labelledby="shop-title" className="bg-cream px-gutter pb-[clamp(56px,6vw,96px)] pt-[clamp(40px,5vw,72px)] max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-stack">
        <div className="flex max-w-[48em] flex-col gap-3.5">
          <BackLink href="/produkte">Zurück zum Sortiment</BackLink>
          <Eyebrow>{shop.eyebrow}</Eyebrow>
          <h1 id="shop-title" className="text-h2-lg">
            {shop.titleStart} <Highlight>{shop.titleHighlight}</Highlight>.
          </h1>
          <p className="m-0 text-base leading-[1.65] text-ink/75 [text-wrap:pretty]">{shop.intro}</p>
          <p className="m-0 flex flex-wrap gap-x-4 gap-y-1 text-small font-semibold text-accent">
            <span>{shop.freeShippingNote}</span>
            <Link href="/versand" className="underline">Versand &amp; Zahlung</Link>
            <Link href="/agb" className="underline">AGB</Link>
            <Link href="/widerrufsbelehrung" className="underline">Widerrufsbelehrung</Link>
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-[clamp(14px,1.6vw,22px)] min-[641px]:max-lg:grid-cols-2 max-[640px]:grid-cols-1">
          {products.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <BreadcrumbJsonLd items={[{ name: "Startseite", path: "/" }, { name: "Shop", path: "/shop" }]} />
    </section>
  );
}
