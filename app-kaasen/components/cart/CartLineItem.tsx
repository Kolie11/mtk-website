"use client";

import { BagIcon } from "@/components/ui/Icons";
import { useCart, type CartLine } from "./CartProvider";

const stepperClass =
  "grid size-6 place-items-center rounded-full border border-kaasen-blue/20 bg-transparent text-kaasen-blue hover:bg-kaasen-blue hover:text-kaasen-yellow";

export function CartLineItem({ line }: { line: CartLine }) {
  const { changeQuantity, remove } = useCart();
  return (
    <li className="grid grid-cols-[56px_1fr_auto] items-center gap-3.5 border-b border-line py-3.5">
      <span className="grid h-[52px] place-items-center rounded-input bg-lavender text-kaasen-blue">
        <BagIcon size={24} />
      </span>
      <span className="flex min-w-0 flex-col gap-1">
        <strong className="text-[14.5px] font-bold text-kaasen-blue">{line.name}</strong>
        <span className="text-[12.5px] text-ink/60">{line.priceLabel}</span>
        <span className="mt-1 flex items-center gap-3">
          <button type="button" onClick={() => changeQuantity(line.productId, -1)} aria-label={`${line.name}: Menge verringern`} className={stepperClass}>
            –
          </button>
          <span className="min-w-3 text-center text-small font-bold text-kaasen-blue" aria-live="polite">
            {line.quantity}
          </span>
          <button type="button" onClick={() => changeQuantity(line.productId, 1)} aria-label={`${line.name}: Menge erhöhen`} className={stepperClass}>
            +
          </button>
        </span>
      </span>
      <button
        type="button"
        onClick={() => remove(line.productId)}
        className="self-start border-0 bg-transparent text-[11.5px] font-semibold text-accent underline"
      >
        Entfernen
      </button>
    </li>
  );
}
