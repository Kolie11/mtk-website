import type { Faq, Partner, Product, ProductPage } from "@/lib/types";
import type { AdminSection } from "./AdminShell";
import { AdminPanel } from "./AdminPanel";

type AdminDashboardProps = {
  products: Product[];
  pages: ProductPage[];
  faqs: Faq[];
  partners: Partner[];
  onNavigate: (section: AdminSection) => void;
};

export function AdminDashboard({ products, pages, faqs, partners, onNavigate }: AdminDashboardProps) {
  const stats: { label: string; value: number; target: AdminSection }[] = [
    { label: "Produkte gesamt", value: products.length, target: "products" },
    { label: "Sichtbar im Shop", value: products.filter((p) => p.insurance === "sale").length, target: "products" },
    { label: "Produktseiten", value: pages.length, target: "pages" },
    { label: "FAQ-Einträge", value: faqs.length, target: "faq" },
    { label: "Partner", value: partners.length, target: "partners" },
  ];

  return (
    <>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-3 p-0">
        {stats.map((stat) => (
          <li key={stat.label}>
            <button type="button" onClick={() => onNavigate(stat.target)} className="flex w-full flex-col gap-1 rounded-tile border border-line bg-white p-5 text-left hover:border-kaasen-blue">
              <strong className="text-[32px] font-extrabold text-kaasen-blue">{stat.value}</strong>
              <span className="text-small text-ink/70">{stat.label}</span>
            </button>
          </li>
        ))}
      </ul>
      <AdminPanel title="Noch nicht angebunden">
        <ul className="m-0 flex flex-col gap-2 pl-5 text-sm leading-[1.6] text-ink/80">
          <li>Rezept-Anfragen, Milchpumpen-Bestellungen, Kontakt, Widerruf, Flyer-Bestellungen (Submissions) — kommen vom Backend.</li>
          <li>Fachpersonen-Zugänge (ProUsers) freischalten.</li>
          <li>Google-Analytics-Statistiken (nach Cookie-Zustimmung).</li>
          <li>Benutzerverwaltung &amp; Rollen.</li>
        </ul>
      </AdminPanel>
    </>
  );
}
