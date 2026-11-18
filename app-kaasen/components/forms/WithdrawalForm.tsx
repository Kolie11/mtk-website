"use client";

import { FormErrorMessage } from "@/components/ui/FormErrorMessage";
import { Honeypot } from "@/components/ui/Honeypot";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { submitWithdrawal } from "@/lib/api/submissions";
import { company } from "@/lib/data/site";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { withdrawalSchema } from "@/lib/validation/withdrawal";

/** Withdrawal declaration → medizintechnik@kaasen.de (mocked in phase 1). */
export function WithdrawalForm({ successAction }: { successAction?: React.ReactNode }) {
  const { status, errors, handleSubmit, isSubmitting } = useFormSubmission(withdrawalSchema, submitWithdrawal);

  if (status === "success") {
    return (
      <SuccessMessage title="Vielen Dank." action={successAction}>
        Ihr Widerruf ist bei uns eingegangen — die Bestätigung kommt per E-Mail.
      </SuccessMessage>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="relative flex flex-col gap-3">
      <p className="m-0 text-sm leading-[1.6] text-ink/75">
        Hiermit widerrufen Sie Ihre Bestellung. Ihre Erklärung geht direkt an {company.email} — Sie erhalten eine Eingangsbestätigung.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-2.5">
        <TextField name="name" label="Name" required variant="plain" placeholder="Vor- und Nachname" autoComplete="name" error={errors.name} idPrefix="wd-" />
        <TextField name="orderNumber" label="Bestellnummer" required variant="plain" placeholder="z. B. #1042" error={errors.orderNumber} idPrefix="wd-" />
        <TextField name="contact" label="E-Mail oder Telefon" required variant="plain" placeholder="Damit wir Sie erreichen" className="col-span-full" error={errors.contact} idPrefix="wd-" />
        <TextAreaField name="message" label="Nachricht" variant="plain" placeholder="Welche Artikel? Grund (optional)" className="col-span-full" idPrefix="wd-" />
      </div>
      <Honeypot />
      <FormErrorMessage visible={status === "error"} />
      <SubmitButton isSubmitting={isSubmitting}>Widerruf absenden</SubmitButton>
    </form>
  );
}
