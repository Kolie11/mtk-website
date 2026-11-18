"use client";

import { FormErrorMessage } from "@/components/ui/FormErrorMessage";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { TextField } from "@/components/ui/TextField";
import { submitWebinarRegistration } from "@/lib/api/submissions";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { webinarRegistrationSchema } from "@/lib/validation/fachbereich";

export function WebinarRegistrationForm({ webinarId }: { webinarId: string }) {
  const { status, errors, handleSubmit, isSubmitting } = useFormSubmission(webinarRegistrationSchema, submitWebinarRegistration);

  if (status === "success") {
    return (
      <p role="status" className="m-0 rounded-field bg-kaasen-blue px-4 py-3.5 text-sm leading-[1.55] text-cream">
        <strong className="text-kaasen-yellow">Danke!</strong> Sie erhalten die Zugangsdaten per Mail.
      </p>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-2.5 rounded-[16px] bg-cream p-4">
      <input type="hidden" name="webinarId" value={webinarId} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-2.5">
        <TextField name="name" label="Name" variant="plain" placeholder="Name" autoComplete="name" error={errors.name} idPrefix="web-" />
        <TextField name="email" label="E-Mail" type="email" variant="plain" placeholder="E-Mail" autoComplete="email" error={errors.email} idPrefix="web-" />
      </div>
      <FormErrorMessage visible={status === "error"} />
      <SubmitButton isSubmitting={isSubmitting} size="md" className="self-start">
        Anmeldung absenden
      </SubmitButton>
    </form>
  );
}
