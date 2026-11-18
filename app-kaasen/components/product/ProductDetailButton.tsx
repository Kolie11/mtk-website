"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { ProductDetailDialog } from "./ProductDetailDialog";

type ProductDetailButtonProps = { product: Product; className: string; label?: string };

/** Opens the product detail modal for products without their own page. */
export function ProductDetailButton({ product, className, label = "Mehr erfahren" }: ProductDetailButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} aria-label={`${label}: ${product.name}`}>
        {label}
      </button>
      <ProductDetailDialog product={product} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
