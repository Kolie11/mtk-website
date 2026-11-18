"use client";

import { FormErrorMessage } from "@/components/ui/FormErrorMessage";
import { Honeypot } from "@/components/ui/Honeypot";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { TextField } from "@/components/ui/TextField";
import { submitProAccessRequest } from "@/lib/api/submissions";
import { proLogin } from "@/lib/data/fachbereich";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { proAccessRequestSchema } from "@/lib/validation/fachbereich";

/** "Zugang beantragen" → stored + mailed to medizintechnik@kaasen.de; admin approves (phase 2). */
export function ProAccessRequestForm() {
  const { status, errors, handleSubmit, isSubmitting } = useFormSubmission(proAccessRequestSchema, submitProAccessRequest);

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col gap-2.5 rounded-tile bg-white p-[18px]">
        <h2 id="pro-auth-title" className="m-0 text-lg">
          {proLogin.pendingTitle}
        </h2>
        <p className="m-0 text-sm leading-[1.6] text-ink/80">{proLogin.pendingText}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="relative flex flex-col gap-3">
      <h2 id="pro-auth-title" className="m-0 text-[clamp(24px,3vw,30px)] leading-[1.15]">
        {proLogin.registerTitle}
      </h2>
      <div className="grid grid-cols-2 gap-2.5 max-[380px]:grid-cols-1">
        <TextField name="name" label="Vorname & Name *" variant="caps" autoComplete="name" error={errors.name} idPrefix="acc-" />
        <TextField name="profession" label="Beruf / Fachrichtung *" variant="caps" error={errors.profession} idPrefix="acc-" />
        <TextField name="organisation" label="Praxis / Einrichtung *" variant="caps" autoComplete="organization" error={errors.organisation} idPrefix="acc-" />
        <TextField name="email" label="E-Mail *" type="email" variant="caps" autoComplete="email" error={errors.email} idPrefix="acc-" />
        <TextField name="phone" label="Telefon" type="tel" variant="caps" autoComplete="tel" error={errors.phone} idPrefix="acc-" />
        <TextField name="professionalId" label="LANR / Berufsnachweis" variant="caps" error={errors.professionalId} idPrefix="acc-" />
      </div>
      <span className="text-[12.5px] leading-[1.55] text-ink/75">{proLogin.registerHint}</span>
      <Honeypot />
      <FormErrorMessage visible={status === "error"} />
      <SubmitButton isSubmitting={isSubmitting}>Zugang beantragen</SubmitButton>
    </form>
  );
}
