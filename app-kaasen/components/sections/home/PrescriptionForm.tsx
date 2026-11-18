"use client";

import Link from "next/link";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FormErrorMessage } from "@/components/ui/FormErrorMessage";
import { Honeypot } from "@/components/ui/Honeypot";
import { SelectField } from "@/components/ui/SelectField";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { submitPrescriptionRequest } from "@/lib/api/submissions";
import { company, prescription } from "@/lib/data/site";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { prescriptionSchema } from "@/lib/validation/prescription";
import { NextcloudRedirectDialog } from "./NextcloudRedirectDialog";

/** Step 1: contact data (mail to bb@kaasen.de). Step 2: redirect to the Nextcloud upload. */
export function PrescriptionForm() {
  const { status, errors, handleSubmit, reset, isSubmitting } = useFormSubmission(prescriptionSchema, submitPrescriptionRequest);

  return (
    <>
      <form noValidate onSubmit={handleSubmit} aria-labelledby="rezept-form-title" className="relative flex flex-col gap-3.5">
        <div className="flex flex-col gap-1.5">
          <Eyebrow className="text-[11px] tracking-label">{prescription.formEyebrow}</Eyebrow>
          <h3 id="rezept-form-title" className="m-0 text-lg">
            {prescription.formTitle}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2.5 max-[380px]:grid-cols-1">
          <SelectField
            name="product"
            label="Für welches Produkt?"
            required
            placeholder="Bitte wählen …"
            options={prescription.productOptions}
            className="col-span-full"
            error={errors.product}
          />
          <TextField name="firstName" label="Vorname" variant="plain" placeholder="Vorname" autoComplete="given-name" error={errors.firstName} />
          <TextField name="lastName" label="Name" required variant="plain" placeholder="Name" autoComplete="family-name" error={errors.lastName} />
          <TextField name="email" label="E-Mail" type="email" required variant="plain" placeholder="E-Mail" autoComplete="email" error={errors.email} />
          <TextField name="phone" label="Telefon" type="tel" required variant="plain" placeholder="Telefon" autoComplete="tel" error={errors.phone} />
          <TextAreaField
            name="message"
            label="Nachricht"
            rows={2}
            variant="plain"
            placeholder="Fragen oder alternative Lieferadresse (optional)"
            className="col-span-full"
          />
        </div>
        <CheckboxField name="privacyConsent" required error={errors.privacyConsent}>
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-kaasen-blue underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der elektronischen Verarbeitung meiner Angaben zu. Widerruf jederzeit an {company.email}.
        </CheckboxField>
        <CheckboxField name="costEstimateConsent" required error={errors.costEstimateConsent}>
          Kaasen darf mit meinen Angaben den Kostenvoranschlag bei meiner Krankenkasse einreichen.
        </CheckboxField>
        <Honeypot />
        <FormErrorMessage visible={status === "error"} />
        <SubmitButton isSubmitting={isSubmitting}>
          {prescription.submitLabel}
          <ArrowRightIcon size={16} strokeWidth={2.4} />
        </SubmitButton>
        <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2">
          <span className="text-[12.5px] text-ink/60">Lieber persönlich?</span>
          <a href={company.phoneHref} className="inline-flex items-center gap-2 text-sm font-bold text-kaasen-blue hover:text-accent">
            <PhoneIcon size={14} strokeWidth={2.4} />
            {company.phoneDisplay}
          </a>
          <span aria-hidden="true" className="text-ink/30">·</span>
          <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 text-sm font-bold text-kaasen-blue hover:text-accent">
            <MailIcon size={14} strokeWidth={2.4} />
            E-Mail
          </a>
        </div>
      </form>
      <NextcloudRedirectDialog open={status === "success"} onClose={reset} />
    </>
  );
}
