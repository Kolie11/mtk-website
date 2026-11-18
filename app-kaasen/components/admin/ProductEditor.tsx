"use client";

import { buttonClass } from "@/components/ui/buttonStyles";
import { CloseButton } from "@/components/ui/CloseButton";
import { Dialog } from "@/components/ui/Dialog";
import { SelectField } from "@/components/ui/SelectField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import type { InsuranceStatus, Product, ProductCategory } from "@/lib/types";
import { insuranceLabels } from "@/lib/admin/labels";

const categories: ProductCategory[] = ["Beckenboden", "Schwangerschaft", "Milchpumpen", "Zubehör", "Männergesundheit", "Kinder", "Fachpersonen"];
const statuses = Object.keys(insuranceLabels) as InsuranceStatus[];

type ProductEditorProps = { product: Product; onSave: (product: Product) => void; onCancel: () => void };

function parseAmount(value: FormDataEntryValue | null): number | null {
  const normalized = String(value ?? "").trim().replace(",", ".");
  if (!normalized) return null;
  const amount = Number(normalized);
  return Number.isFinite(amount) ? amount : null;
}

/** Edit form for one product. proPrice is a separate field, independent from the public price. */
export function ProductEditor({ product, onSave, onCancel }: ProductEditorProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const statusLabel = String(data.get("insurance"));
    const insurance = statuses.find((status) => insuranceLabels[status] === statusLabel) ?? product.insurance;
    const proAmount = parseAmount(data.get("proPriceAmount"));
    onSave({
      ...product,
      name: String(data.get("name") || product.name),
      category: (String(data.get("category")) as ProductCategory) || product.category,
      description: String(data.get("description") ?? product.description),
      tags: String(data.get("tags") ?? "").split(",").map((tag) => tag.trim()).filter(Boolean),
      insurance,
      aidNumber: String(data.get("aidNumber") ?? "").trim() || null,
      price: { amount: parseAmount(data.get("priceAmount")), label: String(data.get("priceLabel") || product.price.label) },
      proPrice: proAmount === null ? null : { amount: proAmount, unit: String(data.get("proPriceUnit") || "inkl. MwSt.") },
    });
  }

  return (
    <Dialog open onClose={onCancel} labelledBy="product-editor-title" className="max-w-[720px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-cream p-[clamp(20px,3vw,32px)]">
        <div className="flex items-start justify-between gap-4">
          <h2 id="product-editor-title" className="m-0 text-h3">
            {product.name} bearbeiten
          </h2>
          <CloseButton onClick={onCancel} />
        </div>
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <TextField name="name" label="Name" variant="plain" defaultValue={product.name} idPrefix="pe-" />
          <SelectField name="category" label="Kategorie" options={categories} defaultValue={product.category} idPrefix="pe-" />
          <TextAreaField name="description" label="Beschreibung" variant="plain" defaultValue={product.description} className="col-span-full" idPrefix="pe-" />
          <TextField name="tags" label="Tags (kommagetrennt)" variant="plain" defaultValue={product.tags.join(", ")} className="col-span-full" idPrefix="pe-" />
          <SelectField name="insurance" label="Kassenstatus" options={statuses.map((s) => insuranceLabels[s])} defaultValue={insuranceLabels[product.insurance]} idPrefix="pe-" />
          <TextField name="aidNumber" label="Hilfsmittelnummer" variant="plain" defaultValue={product.aidNumber ?? ""} idPrefix="pe-" />
          <TextField name="priceLabel" label="Preis (Anzeige)" variant="plain" defaultValue={product.price.label} idPrefix="pe-" />
          <TextField name="priceAmount" label="Preis (Betrag für Warenkorb, €)" variant="plain" defaultValue={product.price.amount?.toString().replace(".", ",") ?? ""} idPrefix="pe-" />
          <TextField name="proPriceAmount" label="Fachpersonenpreis (€)" variant="plain" defaultValue={product.proPrice?.amount.toString().replace(".", ",") ?? ""} idPrefix="pe-" />
          <TextField name="proPriceUnit" label="Fachpersonenpreis Einheit" variant="plain" defaultValue={product.proPrice?.unit ?? ""} placeholder="z. B. pro Sonde · 5 Stück" idPrefix="pe-" />
        </div>
        <p className="m-0 text-micro text-ink/60">Produktbild-Upload und Shopify-Verknüpfung folgen mit dem Backend.</p>
        <div className="flex flex-wrap gap-2.5">
          <button type="submit" className={buttonClass("primary", "md")}>
            Speichern
          </button>
          <button type="button" onClick={onCancel} className={buttonClass("outline", "md")}>
            Abbrechen
          </button>
        </div>
      </form>
    </Dialog>
  );
}
