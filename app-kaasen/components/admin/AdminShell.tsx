"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@/components/ui/Icons";
import { DemoBanner } from "./DemoBanner";

export type AdminSection = "dashboard" | "products" | "pages" | "faq" | "partners";

const navItems: { id: AdminSection; label: string; kicker: string }[] = [
  { id: "dashboard", label: "Übersicht", kicker: "Dashboard" },
  { id: "products", label: "Produkte", kicker: "Sortiment" },
  { id: "pages", label: "Produktseiten (Baukasten)", kicker: "Inhalte" },
  { id: "faq", label: "FAQ", kicker: "Inhalte" },
  { id: "partners", label: "Partner", kicker: "Inhalte" },
];

type AdminShellProps = {
  section: AdminSection;
  onNavigate: (section: AdminSection) => void;
  onLogout: () => void;
  children: React.ReactNode;
};

export function AdminShell({ section, onNavigate, onLogout, children }: AdminShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const current = navItems.find((item) => item.id === section) ?? navItems[0];

  function navigate(target: AdminSection) {
    onNavigate(target);
    setMenuOpen(false);
  }

  return (
    <div className="grid min-h-screen grid-cols-[264px_minmax(0,1fr)] bg-cream max-[900px]:grid-cols-1">
      <aside
        className={`flex w-[264px] flex-col gap-1.5 bg-kaasen-blue px-4 py-[22px] text-cream max-[900px]:fixed max-[900px]:inset-y-0 max-[900px]:left-0 max-[900px]:z-60 max-[900px]:transition-transform max-[900px]:duration-350 ${
          menuOpen ? "max-[900px]:translate-x-0" : "max-[900px]:-translate-x-[105%]"
        }`}
      >
        <div className="mb-5 flex items-center gap-3 px-2">
          <span aria-hidden="true" className="grid size-10 place-items-center rounded-input bg-kaasen-yellow text-lg font-extrabold text-kaasen-blue">K</span>
          <span className="flex flex-col leading-tight">
            <strong>Kaasen</strong>
            <span className="text-micro text-cream/65">Verwaltung</span>
          </span>
        </div>
        <nav aria-label="Verwaltung" className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = item.id === section;
            return (
              <button
                key={item.id}
                type="button"
                aria-current={active ? "page" : undefined}
                onClick={() => navigate(item.id)}
                className={`w-full rounded-input border-0 px-3 py-3 text-left text-sm ${active ? "bg-kaasen-yellow font-bold text-kaasen-blue" : "bg-transparent font-medium text-cream/80 hover:bg-cream/8"}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col gap-2 border-t border-cream/14 pt-4">
          <span className="px-2 text-small font-semibold">M. Kaasen · Administrator</span>
          <button type="button" onClick={onLogout} className="rounded-input border-0 bg-cream/8 px-3 py-2.5 text-left text-small text-cream hover:bg-cream/14">
            Abmelden
          </button>
        </div>
      </aside>
      {menuOpen && <button type="button" aria-label="Menü schließen" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-50 border-0 bg-kaasen-blue/50 min-[901px]:hidden" />}

      <main className="flex min-w-0 flex-col">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line bg-white px-[clamp(16px,3vw,32px)] py-4">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Menü öffnen" className="grid size-10 place-items-center rounded-input border border-line-strong bg-cream text-kaasen-blue min-[901px]:hidden">
              <MenuIcon size={18} />
            </button>
            <div className="flex flex-col">
              <span className="eyebrow text-accent">{current.kicker}</span>
              <h1 className="m-0 text-2xl">{current.label}</h1>
            </div>
          </div>
          <Link href="/" target="_blank" className="text-small font-bold text-kaasen-blue underline">
            Website ansehen
          </Link>
        </header>
        <div className="flex flex-col gap-6 p-[clamp(16px,3vw,32px)]">
          <DemoBanner />
          {children}
        </div>
      </main>
    </div>
  );
}
