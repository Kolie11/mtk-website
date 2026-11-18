"use client";

/* eslint-disable @next/next/no-img-element -- local object-URL previews can't go through next/image */
import { useEffect, useRef, useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { TextField } from "@/components/ui/TextField";
import { saveAdminChange } from "@/lib/api/admin";
import type { Partner } from "@/lib/types";
import { AdminPanel } from "./AdminPanel";

type PartnersAdminProps = { partners: Partner[]; onChange: (partners: Partner[]) => void };

/** Partner logos (JPG/PNG/WebP/SVG). Business rule: no link field — logos are never linked. */
export function PartnersAdmin({ partners, onChange }: PartnersAdminProps) {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const objectUrls = useRef<string[]>([]);

  useEffect(() => {
    const urls = objectUrls.current;
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, []);

  function handleLogo(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    objectUrls.current.push(url);
    setLogoPreview(url);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = String(new FormData(form).get("name") ?? "").trim();
    if (!name) return;
    const next = [...partners, { id: `partner-${Date.now()}`, name, logo: logoPreview, visible: true }];
    onChange(next);
    void saveAdminChange("partners", { name, logo: logoPreview ? "(file upload)" : null });
    setLogoPreview(null);
    form.reset();
  }

  function toggleVisible(id: string) {
    onChange(partners.map((partner) => (partner.id === id ? { ...partner, visible: !partner.visible } : partner)));
  }

  return (
    <>
      <AdminPanel title="Partner hinzufügen">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-3">
          <label className="flex flex-col gap-1 text-micro font-semibold text-kaasen-blue">
            Logo wählen
            <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={handleLogo} className="text-small" />
          </label>
          {logoPreview && <img src={logoPreview} alt="Logo-Vorschau" className="h-12 w-auto rounded-input border border-line bg-white p-1" />}
          <TextField name="name" label="Name" variant="plain" className="min-w-[200px] flex-1" idPrefix="pa-" />
          <button type="submit" className={buttonClass("primary", "md")}>
            Hinzufügen
          </button>
        </form>
        <p className="m-0 text-micro text-ink/60">JPG, PNG, WebP oder SVG · erscheint im Footer unter „Unsere Partner“ — ohne Link.</p>
      </AdminPanel>
      <AdminPanel title={`${partners.length} Partner`}>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,220px),1fr))] gap-3 p-0">
          {partners.map((partner) => (
            <li key={partner.id} className="flex flex-col gap-3 rounded-field border border-line p-4">
              <div className="grid h-16 place-items-center rounded-input bg-cream">
                {partner.logo ? <img src={partner.logo} alt={partner.name} className="max-h-12 w-auto object-contain" /> : <span className="text-micro text-ink/50">kein Logo</span>}
              </div>
              <strong className="text-kaasen-blue">{partner.name}</strong>
              <div className="flex gap-2">
                <button type="button" onClick={() => toggleVisible(partner.id)} aria-pressed={partner.visible} className={buttonClass(partner.visible ? "yellow" : "outline", "sm")}>
                  {partner.visible ? "Sichtbar" : "Ausgeblendet"}
                </button>
                <button type="button" onClick={() => onChange(partners.filter((p) => p.id !== partner.id))} className={buttonClass("outline", "sm", "border-danger text-danger hover:bg-danger hover:text-white")}>
                  Entfernen
                </button>
              </div>
            </li>
          ))}
        </ul>
      </AdminPanel>
    </>
  );
}
