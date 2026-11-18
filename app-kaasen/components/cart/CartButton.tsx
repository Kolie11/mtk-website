"use client";

import { BagIcon } from "@/components/ui/Icons";
import { useCart } from "./CartProvider";

export function CartButton() {
  const { count, open } = useCart();
  return (
    <button
      type="button"
      onClick={open}
      aria-label={count > 0 ? `Warenkorb öffnen, ${count} Artikel` : "Warenkorb öffnen"}
      className="relative flex min-h-11 items-center gap-2 rounded-full border border-kaasen-blue/15 bg-cream px-4 py-[11px] text-[13px] font-semibold text-kaasen-blue transition-colors hover:border-kaasen-blue"
    >
      <BagIcon size={14} />
      <span className="max-sm:hidden">Warenkorb</span>
      {count > 0 && (
        <span
          aria-hidden="true"
          className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-kaasen-yellow px-[5px] text-[11px] font-bold text-kaasen-blue"
        >
          {count}
        </span>
      )}
    </button>
  );
}
