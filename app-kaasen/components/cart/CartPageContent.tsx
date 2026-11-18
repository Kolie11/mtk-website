"use client";

import Link from "next/link";
import { buttonClass } from "@/components/ui/buttonStyles";
import { formatEuro } from "@/lib/format";
import { shop } from "@/lib/data/site";
import { CartLineItem } from "./CartLineItem";
import { useCart } from "./CartProvider";

/** Full-page cart (/warenkorb). */
export function CartPageContent() {
  const { lines, total } = useCart();
  const missingForFreeShipping = shop.freeShippingThreshold - total;

  if (lines.length === 0) {
    return (
      <div className="flex flex-col items-start gap-4">
        <p className="m-0 text-body text-ink/75">Ihr Warenkorb ist leer.</p>
        <Link href="/shop" className={buttonClass("primary", "md")}>
          Zum Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <ul className="m-0 list-none rounded-panel bg-white p-panel">
        {lines.map((line) => (
          <CartLineItem key={line.productId} line={line} />
        ))}
      </ul>
      <aside aria-label="Summe" className="flex flex-col gap-3.5 self-start rounded-panel bg-white p-panel">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] uppercase tracking-[.2em] text-ink/70">Summe</span>
          <strong className="text-[26px] font-extrabold text-kaasen-blue">{formatEuro(total)}</strong>
        </div>
        <p className="m-0 text-small text-ink/70">
          {missingForFreeShipping > 0
            ? `Noch ${formatEuro(missingForFreeShipping)} bis zum kostenlosen Versand.`
            : "Ihre Bestellung wird versandkostenfrei geliefert."}
        </p>
        <Link href="/kasse" className={buttonClass("primary", "lg")}>
          Zur Kasse
        </Link>
        <span className="text-center text-[11.5px] text-ink/70">inkl. MwSt., zzgl. Versand</span>
      </aside>
    </div>
  );
}
