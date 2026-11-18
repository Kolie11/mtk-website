"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseButton } from "@/components/ui/CloseButton";
import { Dialog } from "@/components/ui/Dialog";
import { MenuIcon } from "@/components/ui/Icons";
import { company, mobileNav } from "@/lib/data/site";
import { Logo } from "./Logo";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menü öffnen"
        aria-expanded={open}
        className="grid size-[42px] place-items-center rounded-input border border-kaasen-blue/15 bg-cream text-kaasen-blue min-[801px]:hidden"
      >
        <MenuIcon size={18} />
      </button>
      <Dialog open={open} onClose={close} label="Menü" placement="right" className="max-w-[min(340px,90vw)]">
        <div className="flex h-full flex-col bg-cream p-6 shadow-drawer">
          <div className="mb-6 flex items-center justify-between">
            <Logo className="h-8 w-auto" />
            <CloseButton onClick={close} label="Menü schließen" />
          </div>
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1 text-[17px] font-semibold">
            {mobileNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={close} className="rounded-field px-4 py-3.5 text-kaasen-blue hover:bg-kaasen-yellow">
                {item.label}
              </Link>
            ))}
            <Link href="/fachbereich" onClick={close} className="rounded-field px-4 py-3.5 text-kaasen-blue hover:bg-kaasen-yellow">
              Für Fachpersonen
            </Link>
          </nav>
          <div className="mt-auto flex flex-col gap-2.5 border-t border-line pt-6">
            <a href={company.phoneHref} className="flex items-center justify-center rounded-full bg-kaasen-blue p-3.5 text-sm font-bold text-kaasen-yellow">
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center justify-center rounded-full bg-kaasen-yellow p-3.5 text-sm font-bold text-kaasen-blue">
              E-Mail
            </a>
          </div>
        </div>
      </Dialog>
    </>
  );
}
