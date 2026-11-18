// Rental breast pump online order. Always the MOTHER's data (see form hint).
import { z } from "zod";
import { email, germanZip, honeypot, messages, optionalPhone, optionalText, phone, requiredConsent, requiredText } from "./shared";

export const breastPumpOrderSchema = z
  .object({
    firstName: requiredText(100),
    lastName: requiredText(100),
    street: requiredText(150),
    houseNumber: requiredText(20),
    zip: germanZip,
    city: requiredText(100),
    email,
    phone,
    alternativePhone: optionalPhone,
    stay: z.enum(["home", "hospital"], { error: messages.select }),
    hospital: optionalText(150),
    ward: optionalText(100),
    room: optionalText(30),
    insurer: requiredText(150),
    insuranceNumber: optionalText(30),
    motherBirthDate: optionalText(10),
    deliveryNote: optionalText(),
    privacyConsent: requiredConsent(),
    website: honeypot,
  })
  .refine((data) => data.stay !== "hospital" || Boolean(data.hospital), {
    path: ["hospital"],
    error: "Bitte geben Sie das Krankenhaus an.",
  });

export type BreastPumpOrder = z.infer<typeof breastPumpOrderSchema>;
