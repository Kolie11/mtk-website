"use client";

import { buttonClass, type ButtonSize, type ButtonVariant } from "@/components/ui/buttonStyles";
import type { Product } from "@/lib/types";
import { useCart } from "./CartProvider";

type AddToCartButtonProps = {
  product: Pick<Product, "id" | "name" | "price">;
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onAdded?: () => void;
};

export function AddToCartButton({ product, label = "In den Warenkorb", variant = "primary", size = "sm", className = "", onAdded }: AddToCartButtonProps) {
  const { add } = useCart();
  const amount = product.price.amount;
  if (amount === null) return null;

  function handleClick() {
    if (amount === null) return;
    add({ productId: product.id, name: product.name, priceLabel: product.price.label, unitPrice: amount });
    onAdded?.();
  }

  return (
    <button type="button" onClick={handleClick} className={buttonClass(variant, size, className)}>
      {label}
    </button>
  );
}
