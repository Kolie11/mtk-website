import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { proNav } from "@/lib/data/fachbereich";
import { ProAccountControls } from "./ProAccountControls";

export function ProHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/94 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-gutter py-3.5 max-sm:gap-2.5">
        <Link href="/" className="flex items-center gap-3" aria-label="Medizintechnik Kaasen – Startseite für Privatpersonen">
          <Logo priority className="h-10 w-auto max-sm:h-8" />
          <span className="rounded-full bg-kaasen-blue px-2.5 py-[5px] text-[11px] font-bold uppercase tracking-[.12em] text-kaasen-yellow">Fachbereich</span>
        </Link>
        <nav aria-label="Fachbereich" className="flex flex-wrap items-center gap-x-[clamp(12px,2vw,26px)] gap-y-1 text-sm font-semibold max-md:order-last max-md:w-full max-md:overflow-x-auto">
          {proNav.map((item) => (
            <a key={item.href} href={item.href} className="py-2 text-kaasen-blue hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/" className="px-1.5 py-2 text-[13px] font-semibold text-ink/75 hover:text-kaasen-blue max-sm:hidden">
            Für Privatpersonen
          </Link>
          <ProAccountControls />
        </div>
      </div>
    </header>
  );
}
