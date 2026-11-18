// Products & product pages.
// Backend: GET /products, GET /products/:slug, GET /product-pages/:slug (see docs/BACKEND.md §2).
import { products } from "@/lib/data/products";
import { productPages } from "@/lib/data/productPages";
import type { Product, ProductPage } from "@/lib/types";

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return products.find((product) => product.slug === slug) ?? null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products
    .filter((product) => product.featuredOrder !== null)
    .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
}

/** Sale-only products with an online price (shop page). */
export async function getShopProducts(): Promise<Product[]> {
  return products.filter((product) => product.insurance === "sale");
}

/** Products shown in the Fachbereich overview, in their configured order. */
export async function getProProducts(): Promise<Product[]> {
  return products
    .filter((product) => product.pro !== null)
    .sort((a, b) => (a.pro?.order ?? 0) - (b.pro?.order ?? 0));
}

export async function getProductPages(): Promise<ProductPage[]> {
  return productPages;
}

export async function getProductPage(slug: string): Promise<ProductPage | null> {
  return productPages.find((page) => page.productSlug === slug) ?? null;
}
