"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonClass } from "@/components/ui/buttonStyles";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { FieldError } from "@/components/ui/FieldError";
import { FormErrorMessage } from "@/components/ui/FormErrorMessage";
import { Honeypot } from "@/components/ui/Honeypot";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { submitBreastPumpOrder } from "@/lib/api/submissions";
import { breastPump, company } from "@/lib/data/site";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { breastPumpOrderSchema } from "@/lib/validation/breastPumpOrder";

type Stay = "home" | "hospital";

/** Online order for the rental breast pump. Two columns on mobile for short fields. */
export function BreastPumpOrderForm() {
  const { status, errors, handleSubmit, reset, isSubmitting } = useFormSubmission(breastPumpOrderSchema, submitBreastPumpOrder);
  const [stay, setStay] = useState<Stay | null>(null);

  if (status === "success") {
    return (
      <SuccessMessage
        title={breastPump.successTitle}
        action={
          <button type="button" onClick={reset} className={buttonClass("outline", "sm")}>
            Neue Bestellung
          </button>
        }
      >
        {breastPump.successText}
      </SuccessMessage>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} aria-labelledby="mp-form-title" className="relative flex flex-col gap-4">
      <h3 id="mp-form-title" className="m-0 text-[22px]">
        Bestellformular
      </h3>
      <span className="-mt-2.5 text-[12.5px] text-ink/65">* Pflichtfelder</span>

      <div className="grid grid-cols-2 gap-3 max-sm:gap-2.5">
        <TextField name="firstName" label="Vorname * (Mutter)" autoComplete="given-name" error={errors.firstName} />
        <TextField name="lastName" label="Nachname * (Mutter)" autoComplete="family-name" error={errors.lastName} />
        <TextField name="street" label="Straße * (Wohnort)" autoComplete="address-line1" className="max-sm:col-span-2" error={errors.street} />
        <TextField name="houseNumber" label="Hausnummer *" error={errors.houseNumber} />
        <TextField name="zip" label="PLZ *" autoComplete="postal-code" error={errors.zip} />
        <TextField name="city" label="Stadt *" autoComplete="address-level2" error={errors.city} />
        <TextField name="email" label="E-Mail *" type="email" autoComplete="email" className="max-sm:col-span-2" error={errors.email} />
        <TextField name="phone" label="Telefon *" type="tel" autoComplete="tel" error={errors.phone} />
        <TextField name="alternativePhone" label="Alternative Rufnummer" type="tel" error={errors.alternativePhone} />

        <fieldset className="col-span-2 m-0 flex flex-wrap gap-x-[18px] gap-y-2 border-0 p-0 text-sm text-ink" aria-describedby={errors.stay ? "stay-error" : undefined}>
          <legend className="mb-2 w-full text-micro font-bold uppercase tracking-[.06em] text-kaasen-blue">Aufenthalt *</legend>
          <label className="flex min-h-11 items-center gap-2">
            <input type="radio" name="stay" value="home" onChange={() => setStay("home")} className="size-[18px] accent-kaasen-blue" />
            entlassen
          </label>
          <label className="flex min-h-11 items-center gap-2">
            <input type="radio" name="stay" value="hospital" onChange={() => setStay("hospital")} className="size-[18px] accent-kaasen-blue" />
            noch im Krankenhaus
          </label>
          <span className="w-full">
            <FieldError name="stay" message={errors.stay} />
          </span>
        </fieldset>

        {stay === "hospital" && (
          <>
            <TextField name="hospital" label="Krankenhaus *" className="col-span-2" error={errors.hospital} />
            <TextField name="ward" label="Abteilung" error={errors.ward} />
            <TextField name="room" label="Zimmernummer" error={errors.room} />
          </>
        )}

        <TextField name="insurer" label="Krankenversicherung * (z. B. AOK NordWest)" className="col-span-2 sm:col-span-1" error={errors.insurer} />
        <TextField name="insuranceNumber" label="Versichertennummer" error={errors.insuranceNumber} />
        <TextField name="motherBirthDate" label="Geburtsdatum (Mutter)" type="date" autoComplete="bday" error={errors.motherBirthDate} />
        <TextAreaField
          name="deliveryNote"
          label="Hinweis zur Lieferung"
          placeholder="Besonderer Hinweis für die Lieferung (z. B. Brusthaubengröße, abweichende Lieferadresse u. a.)"
          className="col-span-2"
        />
      </div>

      <CheckboxField name="privacyConsent" required error={errors.privacyConsent}>
        Ich habe die{" "}
        <Link href="/datenschutz" className="text-kaasen-blue underline">
          Datenschutzerklärung
        </Link>{" "}
        zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an {company.email} widerrufen.
      </CheckboxField>

      <Honeypot />
      <FormErrorMessage visible={status === "error"} />
      <SubmitButton isSubmitting={isSubmitting} className="self-start max-sm:w-full">
        Senden
      </SubmitButton>
    </form>
  );
}
