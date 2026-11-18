// Prescription upload (step 1). Not for breast pumps — those need the original prescription.
import { z } from "zod";
import { prescription } from "@/lib/data/site";
import { email, honeypot, messages, optionalText, phone, requiredConsent, requiredText } from "./shared";

export const prescriptionSchema = z.object({
  product: z.enum(prescription.productOptions, { error: messages.select }),
  firstName: optionalText(100),
  lastName: requiredText(100),
  email,
  phone,
  message: optionalText(),
  privacyConsent: requiredConsent(),
  costEstimateConsent: requiredConsent("Bitte bestätigen Sie die Einreichung des Kostenvoranschlags."),
  website: honeypot,
});

export type PrescriptionRequest = z.infer<typeof prescriptionSchema>;
