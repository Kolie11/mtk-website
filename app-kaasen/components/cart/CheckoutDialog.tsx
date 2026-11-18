"use client";

import Link from "next/link";
import { buttonClass } from "@/components/ui/buttonStyles";
import { CloseButton } from "@/components/ui/CloseButton";
import { Dialog } from "@/components/ui/Dialog";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { formatEuro } from "@/lib/format";

type CheckoutDialogProps = { open: boolean; onClose: () => void; total: number };

/** Placeholder until the Shopify subscription exists. */
export function CheckoutDialog({ open, onClose, total }: CheckoutDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} labelledBy="checkout-title" className="max-w-[500px]">
      <div className="flex flex-col gap-4 bg-cream p-[clamp(22px,3vw,32px)]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <Eyebrow className="text-[11px]">Kasse</Eyebrow>
            <h2 id="checkout-title" className="m-0 text-h3">
              Weiter zur Bezahlung
            </h2>
          </div>
          <CloseButton onClick={onClose} />
        </div>
        <div className="flex items-baseline justify-between gap-3 rounded-field bg-white px-4 py-3.5">
          <span className="text-[13px] text-ink/65">Zwischensumme inkl. MwSt.</span>
          <strong className="text-[22px] font-extrabold text-kaasen-blue">{formatEuro(total)}</strong>
        </div>
        <p className="m-0 text-[14.5px] leading-[1.65] text-ink/80">
          Sie werden zum sicheren Checkout von Shopify weitergeleitet. Dort geben Sie Ihre Lieferadresse an und wählen Versand und Zahlungsart.
        </p>
        <Link href="/kasse" onClick={onClose} className={buttonClass("primary", "lg")}>
          Zum Shopify-Checkout
        </Link>
        <span className="text-center text-micro leading-[1.55] text-ink/60">
          Es gelten unsere{" "}
          <Link href="/agb" className="text-kaasen-blue underline">AGB</Link>, die{" "}
          <Link href="/widerrufsbelehrung" className="text-kaasen-blue underline">Widerrufsbelehrung</Link> und die{" "}
          <Link href="/versand" className="text-kaasen-blue underline">Versandbedingungen</Link>.
        </span>
        <span className="rounded-input bg-draft-bg px-3.5 py-3 text-[12.5px] leading-[1.55] text-draft-ink">
          Entwurf: Im Live-Betrieb öffnet sich hier der Shopify-Checkout mit Ihrem Warenkorb.
        </span>
      </div>
    </Dialog>
  );
}
