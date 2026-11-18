// "Vertrag widerrufen" (withdrawal button in the footer) → medizintechnik@kaasen.de
import { z } from "zod";
import { honeypot, optionalText, requiredText } from "./shared";

export const withdrawalSchema = z.object({
  name: requiredText(120),
  orderNumber: requiredText(60),
  contact: requiredText(160),
  message: optionalText(),
  website: honeypot,
});

export type WithdrawalRequest = z.infer<typeof withdrawalSchema>;
