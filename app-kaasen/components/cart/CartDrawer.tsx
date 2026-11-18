"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { CloseButton } from "@/components/ui/CloseButton";
import { Dialog } from "@/components/ui/Dialog";
import { formatEuro } from "@/lib/format";
import { CartLineItem } from "./CartLineItem";
import { CheckoutDialog } from "./CheckoutDialog";
import { useCart } from "./CartProvider";

export function CartDrawer() {
  const { lines, count, total, isOpen, close } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  function goToCheckout() {
    close();
    setCheckoutOpen(true);
  }

  return (
    <>
      <Dialog open={isOpen} onClose={close} labelledBy="cart-title" placement="right" className="sm:max-w-[430px]">
        <div className="flex h-full flex-col bg-cream shadow-drawer">
          <div className="flex items-center justify-between gap-4 border-b border-line px-[26px] py-[22px]">
            <div>
              <h2 id="cart-title" className="m-0 text-xl font-extrabold tracking-[-.01em]">
                Warenkorb
              </h2>
              <p className="m-0 text-[12.5px] text-ink/60">{count === 1 ? "1 Position" : `${count} Positionen`}</p>
            </div>
            <CloseButton onClick={close} />
          </div>

          <div className="flex-1 overflow-y-auto px-[26px] py-[18px]">
            {lines.length > 0 ? (
              <ul className="m-0 list-none p-0">
                {lines.map((line) => (
                  <CartLineItem key={line.productId} line={line} />
                ))}
              </ul>
            ) : (
              <div className="flex flex-col gap-3.5 py-10">
                <strong className="text-[22px] font-extrabold tracking-[-.01em] text-kaasen-blue">Warenkorb ist leer.</strong>
                <p className="m-0 text-[14.5px] leading-[1.7] text-ink/70">
                  Milchpumpen &amp; Hilfsmittel laufen über eine separate Rezept-/Versorgungsanfrage. Ob Ihre Kasse übernimmt, prüfen wir kostenlos.
                </p>
                <Link href="/produkte" onClick={close} className={buttonClass("primary", "sm", "self-start")}>
                  Sortiment ansehen
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3.5 border-t border-line bg-white px-[26px] pb-[26px] pt-[22px]">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] uppercase tracking-[.2em] text-ink/70">Summe</span>
              <strong className="text-[26px] font-extrabold tracking-[-.02em] text-kaasen-blue">{formatEuro(total)}</strong>
            </div>
            <button type="button" onClick={goToCheckout} disabled={lines.length === 0} className={buttonClass("primary", "lg")}>
              Zur Kasse
            </button>
            <span className="text-center text-[11.5px] leading-[1.6] text-ink/70">
              Sichere Bezahlung über Shopify · inkl. MwSt., zzgl. Versand
            </span>
          </div>
        </div>
      </Dialog>
      <CheckoutDialog open={checkoutOpen} onClose={() => setCheckoutOpen(false)} total={total} />
    </>
  );
}
