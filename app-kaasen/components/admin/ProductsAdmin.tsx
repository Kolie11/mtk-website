"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { saveAdminChange } from "@/lib/api/admin";
import { insuranceLabels } from "@/lib/admin/labels";
import type { Product } from "@/lib/types";
import { AdminPanel } from "./AdminPanel";
import { ProductEditor } from "./ProductEditor";

type ProductsAdminProps = { products: Product[]; onChange: (products: Product[]) => void };

export function ProductsAdmin({ products, onChange }: ProductsAdminProps) {
  const [query, setQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const editing = products.find((product) => product.id === editingId) ?? null;
  const visible = products.filter((product) => product.name.toLowerCase().includes(query.trim().toLowerCase()));

  function save(updated: Product) {
    onChange(products.map((product) => (product.id === updated.id ? updated : product)));
    void saveAdminChange(`products/${updated.id}`, updated);
    setEditingId(null);
  }

  return (
    <AdminPanel
      title={`${visible.length} von ${products.length} Produkten`}
      actions={
        <label className="flex items-center gap-2 text-small text-ink/70">
          <span className="sr-only">Produkte suchen</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Suchen …"
            className="rounded-full border border-line-strong bg-cream px-4 py-2.5 text-sm focus:border-kaasen-blue focus:outline-none"
          />
        </label>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="label-caps text-kaasen-blue/70">
              <th scope="col" className="px-3 py-2">Produkt</th>
              <th scope="col" className="px-3 py-2">Kategorie</th>
              <th scope="col" className="px-3 py-2">Kasse</th>
              <th scope="col" className="px-3 py-2">Preis</th>
              <th scope="col" className="px-3 py-2">Fachpersonenpreis</th>
              <th scope="col" className="px-3 py-2"><span className="sr-only">Aktion</span></th>
            </tr>
          </thead>
          <tbody>
            {visible.map((product) => (
              <tr key={product.id} className="border-t border-line">
                <th scope="row" className="px-3 py-3 font-bold text-kaasen-blue">{product.name}</th>
                <td className="px-3 py-3">{product.category}</td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-tag-bg px-2.5 py-1 text-micro font-semibold text-accent">{insuranceLabels[product.insurance]}</span>
                </td>
                <td className="px-3 py-3">{product.price.label}</td>
                <td className="px-3 py-3">{product.proPrice ? `${product.proPrice.amount.toFixed(2).replace(".", ",")} € · ${product.proPrice.unit}` : "—"}</td>
                <td className="px-3 py-3 text-right">
                  <button type="button" onClick={() => setEditingId(product.id)} className={buttonClass("outline", "sm")}>
                    Bearbeiten<span className="sr-only">: {product.name}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editing && <ProductEditor key={editing.id} product={editing} onSave={save} onCancel={() => setEditingId(null)} />}
    </AdminPanel>
  );
}
