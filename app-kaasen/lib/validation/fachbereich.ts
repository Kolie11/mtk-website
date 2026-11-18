// Fachbereich forms: contact, flyer order, access request, login, webinar + newsletter.
import { z } from "zod";
import { email, honeypot, optionalPhone, optionalText, requiredConsent, requiredText } from "./shared";

const proBase = {
  name: requiredText(120),
  organisation: optionalText(160),
  email,
  phone: optionalPhone,
  privacyConsent: requiredConsent(),
  website: honeypot,
};

export const proContactSchema = z.object({
  ...proBase,
  message: requiredText(4000),
});

export const flyerOrderSchema = z.object({
  ...proBase,
  flyerIds: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((value) => (value === undefined ? [] : Array.isArray(value) ? value : [value]))
    .pipe(z.array(z.string()).min(1, { error: "Bitte wählen Sie mindestens einen Flyer aus." })),
  street: requiredText(150),
  zipCity: requiredText(150),
  message: optionalText(),
});

export const proAccessRequestSchema = z.object({
  name: requiredText(120),
  profession: requiredText(120),
  organisation: requiredText(160),
  email,
  phone: optionalPhone,
  professionalId: optionalText(60),
  website: honeypot,
});

export const proLoginSchema = z.object({
  email,
  password: requiredText(200),
});

export const webinarRegistrationSchema = z.object({
  webinarId: requiredText(60),
  name: requiredText(120),
  email,
});

export const newsletterSchema = z.object({
  email,
});

export type ProContactRequest = z.infer<typeof proContactSchema>;
export type FlyerOrder = z.infer<typeof flyerOrderSchema>;
export type ProAccessRequest = z.infer<typeof proAccessRequestSchema>;
export type ProLoginInput = z.infer<typeof proLoginSchema>;
export type WebinarRegistration = z.infer<typeof webinarRegistrationSchema>;
export type NewsletterSignup = z.infer<typeof newsletterSchema>;
