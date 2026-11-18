"use client";

import Link from "next/link";
import { buttonClass } from "@/components/ui/buttonStyles";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { FormErrorMessage } from "@/components/ui/FormErrorMessage";
import { Honeypot } from "@/components/ui/Honeypot";
import { SelectField } from "@/components/ui/SelectField";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { submitContactRequest } from "@/lib/api/submissions";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { contactSchema } from "@/lib/validation/contact";

type ContactFormProps = {
  submitLabel: string;
  /** Topic select (home page) */
  topics?: readonly string[];
  /** Product select (product pages) */
  products?: readonly string[];
  defaultProduct?: string;
};

/** General contact form → medizintechnik@kaasen.de (mocked in phase 1). */
export function ContactForm({ submitLabel, topics, products, defaultProduct }: ContactFormProps) {
  const { status, errors, handleSubmit, reset, isSubmitting } = useFormSubmission(contactSchema, submitContactRequest);

  if (status === "success") {
    return (
      <SuccessMessage
        title="Vielen Dank für Ihre Nachricht."
        action={
          <button type="button" onClick={reset} className={buttonClass("outline", "sm")}>
            Neue Nachricht
          </button>
        }
      >
        Wir melden uns schnellstmöglich bei Ihnen — in der Regel noch am selben Werktag.
      </SuccessMessage>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="relative grid grid-cols-2 gap-3 max-[380px]:grid-cols-1">
      {products && (
        <SelectField
          name="product"
          label="Produkt"
          options={products}
          defaultValue={defaultProduct}
          variant="plain"
          className="col-span-full"
        />
      )}
      <TextField name="name" label="Name" placeholder="Name" variant="soft" autoComplete="name" error={errors.name} />
      <TextField name="email" label="E-Mail" type="email" placeholder="E-Mail" variant="soft" autoComplete="email" error={errors.email} />
      <TextField name="phone" label="Telefon" type="tel" placeholder="Telefon" variant="soft" autoComplete="tel" error={errors.phone} />
      {topics && <SelectField name="topic" label="Anliegen" placeholder="Anliegen wählen…" options={topics} variant="soft" />}
      <TextAreaField
        name="message"
        label="Nachricht"
        rows={4}
        placeholder="Wie können wir helfen?"
        variant="soft"
        className="col-span-full"
        error={errors.message}
      />
      <CheckboxField name="privacyConsent" required className="col-span-full" error={errors.privacyConsent}>
        <Link href="/datenschutz" className="text-kaasen-blue underline">
          Datenschutzerklärung
        </Link>{" "}
        gelesen und akzeptiert.
      </CheckboxField>
      <Honeypot />
      <div className="col-span-full flex flex-col gap-3">
        <FormErrorMessage visible={status === "error"} />
        <SubmitButton isSubmitting={isSubmitting}>{submitLabel}</SubmitButton>
      </div>
    </form>
  );
}
