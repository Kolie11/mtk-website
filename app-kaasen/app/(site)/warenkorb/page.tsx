import type { Metadata } from "next";
import { CartPageContent } from "@/components/cart/CartPageContent";
import { BackLink } from "@/components/layout/BackLink";

export const metadata: Metadata = {
  title: "Warenkorb",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <section aria-labelledby="cart-page-title" className="px-gutter py-section max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-6">
        <BackLink href="/shop">Weiter einkaufen</BackLink>
        <h1 id="cart-page-title" className="text-h2-md">
          Warenkorb
        </h1>
        <CartPageContent />
      </div>
    </section>
  );
}
