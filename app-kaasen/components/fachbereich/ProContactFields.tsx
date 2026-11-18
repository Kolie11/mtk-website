import type { FieldErrors } from "@/lib/forms/useFormSubmission";
import { TextField } from "@/components/ui/TextField";

/** Name / Praxis / E-Mail / Telefon — shared by both Fachbereich contact modes. */
export function ProContactFields({ errors, idPrefix }: { errors: FieldErrors; idPrefix: string }) {
  return (
    <>
      <TextField name="name" label="Name *" autoComplete="name" error={errors.name} idPrefix={idPrefix} />
      <TextField name="organisation" label="Praxis / Einrichtung" autoComplete="organization" error={errors.organisation} idPrefix={idPrefix} />
      <TextField name="email" label="E-Mail *" type="email" autoComplete="email" error={errors.email} idPrefix={idPrefix} />
      <TextField name="phone" label="Telefon" type="tel" autoComplete="tel" error={errors.phone} idPrefix={idPrefix} />
    </>
  );
}
