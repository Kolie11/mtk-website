"use client";

import Link from "next/link";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { FormErrorMessage } from "@/components/ui/FormErrorMessage";
import { Honeypot } from "@/components/ui/Honeypot";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { submitProContactRequest } from "@/lib/api/submissions";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { proContactSchema } from "@/lib/validation/fachbereich";
import { ProContactFields } from "./ProContactFields";
import { ProFormSuccess } from "./ProFormSuccess";

export function ProContactForm() {
  const { status, errors, handleSubmit, reset, isSubmitting } = useFormSubmission(proContactSchema, submitProContactRequest);

  if (status === "success") return <ProFormSuccess title="Danke für Ihre Anfrage." onReset={reset} />;

  return (
    <form noValidate onSubmit={handleSubmit} className="relative flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2.5 max-[380px]:grid-cols-1">
        <ProContactFields errors={errors} idPrefix="pc-" />
      </div>
      <TextAreaField name="message" label="Nachricht *" rows={4} error={errors.message} idPrefix="pc-" />
      <CheckboxField name="privacyConsent" required error={errors.privacyConsent} idPrefix="pc-">
        Ich stimme zu, dass meine Angaben zur Bearbeitung gespeichert werden (
        <Link href="/datenschutz" className="text-kaasen-blue underline">
          Datenschutz
        </Link>
        ).
      </CheckboxField>
      <Honeypot />
      <FormErrorMessage visible={status === "error"} />
      <SubmitButton isSubmitting={isSubmitting} className="self-start text-[14.5px] max-sm:w-full">
        Kontakt anfragen
      </SubmitButton>
    </form>
  );
}
