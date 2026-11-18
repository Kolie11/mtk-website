// General contact form (home page and product pages).
import { z } from "zod";
import { email, honeypot, optionalPhone, optionalText, requiredConsent, requiredText } from "./shared";

export const contactSchema = z.object({
  name: requiredText(120),
  email,
  phone: optionalPhone,
  topic: optionalText(80),
  product: optionalText(120),
  message: requiredText(4000),
  privacyConsent: requiredConsent(),
  website: honeypot,
});

export type ContactRequest = z.infer<typeof contactSchema>;
