import type { Metadata } from "next";
import { AdminApp } from "@/components/admin/AdminApp";
import { getFaqs, getPartners } from "@/lib/api/content";
import { getProductPages, getProducts } from "@/lib/api/products";

export const metadata: Metadata = {
  title: "Admin — Verwaltung (Demo)",
  robots: { index: false, follow: false },
};

/** Admin UI only (demo). Data comes from the static layer and is edited in local state. */
export default async function AdminPage() {
  const [products, productPages, faqs, partners] = await Promise.all([getProducts(), getProductPages(), getFaqs(), getPartners()]);
  return <AdminApp initialProducts={products} initialPages={productPages} initialFaqs={faqs} initialPartners={partners} />;
}
