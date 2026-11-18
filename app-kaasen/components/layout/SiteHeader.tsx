import Link from "next/link";
import { CartButton } from "@/components/cart/CartButton";
import { PhoneIcon } from "@/components/ui/Icons";
import { company, mainNav } from "@/lib/data/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-60 border-b border-line bg-cream/90 backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-site items-center justify-between gap-5 px-gutter py-4 max-sm:gap-1.5 max-sm:py-2.5">
        <Link href="/" className="flex items-center" aria-label="Medizintechnik Kaasen – Startseite">
          <Logo priority className="h-10 w-auto max-sm:h-7" />
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden flex-wrap gap-0.5 text-sm font-medium min-[801px]:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3.5 py-2.5 text-kaasen-blue hover:bg-kaasen-blue/6 hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CartButton />
          <a
            href={company.phoneHref}
            aria-label={`Anrufen: ${company.phoneDisplay}`}
            className="inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap rounded-full bg-kaasen-blue px-[18px] py-3 text-[13.5px] font-bold text-kaasen-yellow transition-colors hover:bg-ink hover:text-kaasen-yellow"
          >
            <PhoneIcon size={14} strokeWidth={2.4} />
            <span className="max-[800px]:hidden">{company.phoneDisplay}</span>
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
