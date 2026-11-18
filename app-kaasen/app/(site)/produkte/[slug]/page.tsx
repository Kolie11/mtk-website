import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCareSection } from "@/components/product-page/ProductCareSection";
import { ProductContactSection } from "@/components/product-page/ProductContactSection";
import { ProductFaqSection } from "@/components/product-page/ProductFaqSection";
import { ProductFunctionSection } from "@/components/product-page/ProductFunctionSection";
import { ProductHero } from "@/components/product-page/ProductHero";
import { ProductSuitabilitySection } from "@/components/product-page/ProductSuitabilitySection";
import { ProductSummarySection } from "@/components/product-page/ProductSummarySection";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";
import { getProductBySlug, getProductPage, getProductPages, getProducts } from "@/lib/api/products";

type ProductRouteProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getProductPages();
  return pages.map((page) => ({ slug: page.productSlug }));
}

export async function generateMetadata({ params }: ProductRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const [product, page] = await Promise.all([getProductBySlug(slug), getProductPage(slug)]);
  if (!product || !page) return {};
  const image = product.image?.src;
  return {
    title: product.name,
    description: page.claim,
    alternates: { canonical: `/produkte/${slug}` },
    openGraph: { title: product.name, description: page.claim, images: image ? [{ url: image, alt: product.name }] : undefined },
  };
}

export default async function ProductRoute({ params }: ProductRouteProps) {
  const { slug } = await params;
  const [product, page, pages, products] = await Promise.all([getProductBySlug(slug), getProductPage(slug), getProductPages(), getProducts()]);
  if (!product || !page) notFound();

  const pageProductNames = pages
    .map((entry) => products.find((candidate) => candidate.slug === entry.productSlug)?.name)
    .filter((name): name is string => Boolean(name))
    .concat("Anderes Produkt");
  const isInsuranceProduct = product.insurance === "listed" || product.insurance === "unlisted";

  return (
    <>
      <ProductHero product={product} page={page} />
      <ProductSummarySection page={page} />
      <ProductFunctionSection product={product} page={page} />
      <ProductSuitabilitySection product={product} page={page} />
      {isInsuranceProduct && <ProductCareSection product={product} page={page} />}
      <ProductContactSection product={product} productNames={pageProductNames} />
      <ProductFaqSection product={product} page={page} />
      <ProductJsonLd product={product} description={page.claim} />
      <FaqJsonLd items={page.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "/" },
          { name: "Produkte", path: "/produkte" },
          { name: product.name, path: `/produkte/${product.slug}` },
        ]}
      />
    </>
  );
}
