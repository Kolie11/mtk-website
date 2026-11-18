"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { SelectField } from "@/components/ui/SelectField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { saveAdminChange } from "@/lib/api/admin";
import type { Faq, FaqCategory } from "@/lib/types";
import { AdminPanel } from "./AdminPanel";

const categories: FaqCategory[] = ["Allgemein", "Milchpumpen", "Beckenbodentrainer", "Kostenübernahme"];

type FaqAdminProps = { faqs: Faq[]; onChange: (faqs: Faq[]) => void };

export function FaqAdmin({ faqs, onChange }: FaqAdminProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const editing = faqs.find((faq) => faq.id === editingId) ?? null;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const question = String(data.get("question") ?? "").trim();
    const answer = String(data.get("answer") ?? "").trim();
    if (!question || !answer) return;
    const category = String(data.get("category")) as FaqCategory;

    const next: Faq[] = editing
      ? faqs.map((faq) => (faq.id === editing.id ? { ...faq, question, answer, category } : faq))
      : [...faqs, { id: `faq-${Date.now()}`, question, answer, category, visible: true, order: faqs.length + 1 }];
    onChange(next);
    void saveAdminChange("faqs", next);
    setEditingId(null);
    form.reset();
  }

  function toggleVisible(id: string) {
    onChange(faqs.map((faq) => (faq.id === id ? { ...faq, visible: !faq.visible } : faq)));
  }

  function remove(id: string) {
    onChange(faqs.filter((faq) => faq.id !== id));
  }

  return (
    <>
      <AdminPanel title={editing ? "FAQ bearbeiten" : "Neue Frage"}>
        <form key={editingId ?? "new"} onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <SelectField name="category" label="Kategorie" options={categories} defaultValue={editing?.category ?? categories[0]} idPrefix="faq-" />
          <TextField name="question" label="Frage" variant="plain" defaultValue={editing?.question} idPrefix="faq-" />
          <TextAreaField name="answer" label="Antwort" variant="plain" rows={3} defaultValue={editing?.answer} className="col-span-full" idPrefix="faq-" />
          <div className="col-span-full flex flex-wrap gap-2.5">
            <button type="submit" className={buttonClass("primary", "md")}>
              {editing ? "Speichern" : "Hinzufügen"}
            </button>
            {editing && (
              <button type="button" onClick={() => setEditingId(null)} className={buttonClass("outline", "md")}>
                Abbrechen
              </button>
            )}
          </div>
          <p className="col-span-full m-0 text-micro text-ink/60">Erscheint auf der Website im FAQ-Bereich, gefiltert nach Kategorie.</p>
        </form>
      </AdminPanel>
      <AdminPanel title={`${faqs.length} Einträge`}>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {faqs.map((faq) => (
            <li key={faq.id} className="flex flex-wrap items-start justify-between gap-3 rounded-field border border-line p-4">
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="label-caps text-accent">{faq.category}</span>
                <strong className="text-kaasen-blue">{faq.question}</strong>
                <span className="text-small text-ink/70">{faq.answer}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => toggleVisible(faq.id)} aria-pressed={faq.visible} className={buttonClass(faq.visible ? "yellow" : "outline", "sm")}>
                  {faq.visible ? "Sichtbar" : "Ausgeblendet"}
                </button>
                <button type="button" onClick={() => setEditingId(faq.id)} className={buttonClass("outline", "sm")}>
                  Bearbeiten
                </button>
                <button type="button" onClick={() => remove(faq.id)} className={buttonClass("outline", "sm", "border-danger text-danger hover:bg-danger hover:text-white")}>
                  Löschen
                </button>
              </div>
            </li>
          ))}
        </ul>
      </AdminPanel>
    </>
  );
}
