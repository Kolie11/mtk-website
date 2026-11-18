// Shared zod building blocks. Error messages are German (user-facing).
import { z } from "zod";

export const messages = {
  required: "Bitte füllen Sie dieses Feld aus.",
  email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  phone: "Bitte geben Sie eine gültige Telefonnummer ein.",
  zip: "Bitte geben Sie eine gültige Postleitzahl ein.",
  privacy: "Bitte bestätigen Sie die Datenschutzerklärung.",
  select: "Bitte wählen Sie eine Option.",
} as const;

export const requiredText = (max = 200) =>
  z.string().trim().min(1, { error: messages.required }).max(max);

export const optionalText = (max = 2000) =>
  z.string().trim().max(max).optional().transform((value) => value || undefined);

export const email = z.string().trim().min(1, { error: messages.required }).pipe(z.email({ error: messages.email }));

export const phone = z
  .string()
  .trim()
  .min(1, { error: messages.required })
  .regex(/^[+()\d\s/-]{5,30}$/, { error: messages.phone });

export const optionalPhone = z
  .string()
  .trim()
  .regex(/^([+()\d\s/-]{5,30})?$/, { error: messages.phone })
  .optional()
  .transform((value) => value || undefined);

export const germanZip = z.string().trim().regex(/^\d{5}$/, { error: messages.zip });

/** HTML checkbox: present ("on") when ticked, absent otherwise. */
export const requiredConsent = (message: string = messages.privacy) =>
  z.literal("on", { error: message }).transform(() => true as const);

/** Hidden honeypot input — real users leave it empty. */
export const honeypot = z.string().max(0).optional();

export const HONEYPOT_FIELD = "website";
