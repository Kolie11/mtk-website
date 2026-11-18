"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { FieldError } from "@/components/ui/FieldError";
import { FormErrorMessage } from "@/components/ui/FormErrorMessage";
import { Honeypot } from "@/components/ui/Honeypot";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { submitFlyerOrder } from "@/lib/api/submissions";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import type { Flyer } from "@/lib/types";
import { flyerOrderSchema } from "@/lib/validation/fachbereich";
import { ProContactFields } from "./ProContactFields";
import { ProFormSuccess } from "./ProFormSuccess";

/** "Infomaterial bestellen": 7 printed flyers (checkbox each) + postal address. */
export function FlyerOrderForm({ flyers }: { flyers: Flyer[] }) {
  const { status, errors, handleSubmit, reset, isSubmitting } = useFormSubmission(flyerOrderSchema, submitFlyerOrder);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleReset() {
    setSelected(new Set());
    reset();
  }

  if (status === "success") return <ProFormSuccess title="Danke für Ihre Bestellung." onReset={handleReset} />;

  return (
    <form noValidate onSubmit={handleSubmit} className="relative flex flex-col gap-3">
      <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0" aria-describedby={errors.flyerIds ? "flyerIds-error" : undefined}>
        <legend className="mb-2.5 text-small text-ink/78">Alles markieren, was Sie haben möchten:</legend>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-2">
          {flyers.map((flyer) => {
            const isOn = selected.has(flyer.id);
            return (
              <label
                key={flyer.id}
                className={`flex min-w-0 cursor-pointer items-center gap-3 rounded-field border-[1.5px] px-3 py-2.5 ${isOn ? "border-kaasen-blue bg-highlight" : "border-kaasen-blue/12 bg-white"}`}
              >
                <input type="checkbox" name="flyerIds" value={flyer.id} checked={isOn} onChange={() => toggle(flyer.id)} className="size-[18px] flex-none accent-kaasen-blue" />
                <span className="relative size-11 flex-none overflow-hidden rounded-[10px] bg-white">
                  <Image src={flyer.image} alt="" fill sizes="44px" className="object-contain p-1" />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <strong className="text-[13px] leading-[1.35] text-kaasen-blue">{flyer.title}</strong>
                  <span className="text-[11.5px] leading-[1.4] text-ink/70">{flyer.description}</span>
                </span>
              </label>
            );
          })}
        </div>
        <span className="text-[12.5px] font-bold text-accent" aria-live="polite">
          {selected.size ? `${selected.size} ausgewählt` : "Noch nichts ausgewählt"}
        </span>
        <FieldError name="flyerIds" message={errors.flyerIds} />
      </fieldset>

      <div className="grid grid-cols-2 gap-2.5 max-[380px]:grid-cols-1">
        <ProContactFields errors={errors} idPrefix="fo-" />
        <TextField name="street" label="Straße & Hausnummer *" autoComplete="street-address" error={errors.street} idPrefix="fo-" />
        <TextField name="zipCity" label="PLZ & Ort *" autoComplete="address-level2" error={errors.zipCity} idPrefix="fo-" />
      </div>
      <TextAreaField name="message" label="Anmerkung (z. B. Stückzahl)" rows={3} idPrefix="fo-" />
      <CheckboxField name="privacyConsent" required error={errors.privacyConsent} idPrefix="fo-">
        Ich stimme zu, dass meine Angaben zur Bearbeitung gespeichert werden (
        <Link href="/datenschutz" className="text-kaasen-blue underline">
          Datenschutz
        </Link>
        ).
      </CheckboxField>
      <Honeypot />
      <FormErrorMessage visible={status === "error"} />
      <SubmitButton isSubmitting={isSubmitting} className="self-start text-[14.5px] max-sm:w-full">
        Infomaterial bestellen
      </SubmitButton>
    </form>
  );
}
