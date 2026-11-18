import type { Metadata } from "next";
import Link from "next/link";
import { BackLink } from "@/components/layout/BackLink";
import { ProductCatalog } from "@/components/product/ProductCatalog";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buttonClass } from "@/components/ui/buttonStyles";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Highlight";
import { getProducts } from "@/lib/api/products";
import { productCatalog } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Produkte nach Anwendungsbereich",
  description:
    "Hilfsmittel für Beckenboden, Schwangerschaft, Stillzeit, Kinder- und Männergesundheit — mit Unterstützung bei der Kostenübernahme durch die Krankenkasse.",
  alternates: { canonical: "/produkte" },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section aria-labelledby="catalog-title" className="bg-cream px-gutter pb-[clamp(56px,6vw,96px)] pt-[clamp(40px,5vw,72px)] max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-stack">
        <div className="flex max-w-[48em] flex-col gap-3.5">
          <BackLink href="/">Zur Startseite</BackLink>
          <Eyebrow>{productCatalog.eyebrow}</Eyebrow>
          <h1 id="catalog-title" className="text-h2-lg">
            {productCatalog.titleStart} <Highlight>{productCatalog.titleHighlight}</Highlight>
          </h1>
          <p className="m-0 text-lead leading-[1.65] text-ink/72">{productCatalog.intro}</p>
          <Link href="/shop" className={buttonClass("outline", "sm", "self-start text-[13.5px]")}>
            {productCatalog.shopLink}
          </Link>
        </div>
        <ProductCatalog products={products} filters={productCatalog.filters} />
      </div>
      <BreadcrumbJsonLd items={[{ name: "Startseite", path: "/" }, { name: "Produkte", path: "/produkte" }]} />
    </section>
  );
}
