import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass } from "@/components/ui/buttonStyles";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Kasse",
  robots: { index: false, follow: false },
};

/** Checkout placeholder — Shopify subscription pending. */
export default function CheckoutPage() {
  return (
    <section aria-labelledby="checkout-page-title" className="px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto flex max-w-[640px] flex-col items-start gap-5 rounded-panel bg-white p-panel">
        <Eyebrow>Kasse</Eyebrow>
        <h1 id="checkout-page-title" className="text-h2-md">
          Checkout über Shopify folgt.
        </h1>
        <p className="m-0 text-body leading-[1.65] text-ink/75">
          Hier öffnet sich im Live-Betrieb der sichere Shopify-Checkout mit Ihrem Warenkorb. Bis dahin bestellen Sie gerne telefonisch unter 02306 30609-0.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <Link href="/warenkorb" className={buttonClass("primary", "md")}>
            Zum Warenkorb
          </Link>
          <Link href="/shop" className={buttonClass("outline", "md")}>
            Zum Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
