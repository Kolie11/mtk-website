"use client";

import { useState } from "react";
import { FilterChips } from "@/components/ui/FilterChips";
import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

type ProductCatalogProps = { products: Product[]; filters: readonly string[] };

const ALL = "Alle";

/**
 * Filterable catalogue. Sale-only products are hidden under "Alle"
 * but shown in their own category (and in the shop).
 */
export function ProductCatalog({ products, filters }: ProductCatalogProps) {
  const [filter, setFilter] = useState<string>(ALL);

  const visible = products.filter((product) => {
    if (filter === ALL) return product.insurance !== "sale";
    return product.category === filter || product.alsoIn.some((category) => category === filter);
  });

  return (
    <div className="flex flex-col gap-stack">
      <FilterChips label="Produkte nach Anwendungsbereich filtern" options={filters} value={filter} onChange={setFilter} />
      <p className="sr-only" aria-live="polite">
        {visible.length} Produkte angezeigt
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,270px),1fr))] gap-[18px] min-[801px]:max-lg:grid-cols-2 max-[800px]:grid-cols-1">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
