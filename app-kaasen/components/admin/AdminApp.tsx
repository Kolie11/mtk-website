"use client";

import { useState } from "react";
import type { Faq, Partner, Product, ProductPage } from "@/lib/types";
import { AdminDashboard } from "./AdminDashboard";
import { AdminLogin } from "./AdminLogin";
import { AdminShell, type AdminSection } from "./AdminShell";
import { FaqAdmin } from "./FaqAdmin";
import { PageBuilder } from "./PageBuilder";
import { PartnersAdmin } from "./PartnersAdmin";
import { ProductsAdmin } from "./ProductsAdmin";

type AdminAppProps = {
  initialProducts: Product[];
  initialPages: ProductPage[];
  initialFaqs: Faq[];
  initialPartners: Partner[];
};

/** Demo admin: everything lives in React state and is lost on reload ("Demo – Backend folgt"). */
export function AdminApp({ initialProducts, initialPages, initialFaqs, initialPartners }: AdminAppProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [section, setSection] = useState<AdminSection>("dashboard");
  const [products, setProducts] = useState(initialProducts);
  const [faqs, setFaqs] = useState(initialFaqs);
  const [partners, setPartners] = useState(initialPartners);

  if (!loggedIn) return <AdminLogin onSuccess={() => setLoggedIn(true)} />;

  return (
    <AdminShell section={section} onNavigate={setSection} onLogout={() => setLoggedIn(false)}>
      {section === "dashboard" && <AdminDashboard products={products} faqs={faqs} partners={partners} pages={initialPages} onNavigate={setSection} />}
      {section === "products" && <ProductsAdmin products={products} onChange={setProducts} />}
      {section === "pages" && <PageBuilder pages={initialPages} products={products} />}
      {section === "faq" && <FaqAdmin faqs={faqs} onChange={setFaqs} />}
      {section === "partners" && <PartnersAdmin partners={partners} onChange={setPartners} />}
    </AdminShell>
  );
}
