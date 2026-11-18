// Form submissions. Phase 1: MOCKED — logs the payload and resolves after a short delay.
// Backend: POST /submissions/<type> (see docs/BACKEND.md §5). Each submission must be
// stored in the admin AND e-mailed to the recipient listed below.
import { MOCK_LATENCY_MS, wait } from "@/lib/api/config";
import type { BreastPumpOrder } from "@/lib/validation/breastPumpOrder";
import type { ContactRequest } from "@/lib/validation/contact";
import type {
  FlyerOrder,
  NewsletterSignup,
  ProAccessRequest,
  ProContactRequest,
  WebinarRegistration,
} from "@/lib/validation/fachbereich";
import type { PrescriptionRequest } from "@/lib/validation/prescription";
import type { WithdrawalRequest } from "@/lib/validation/withdrawal";

export type SubmissionResult = { id: string; receivedAt: string };

/** Target mailboxes the backend must notify (business rules). */
export const submissionRecipients = {
  prescription: "bb@kaasen.de",
  breastPumpOrder: "medizintechnik@kaasen.de",
  contact: "medizintechnik@kaasen.de",
  withdrawal: "medizintechnik@kaasen.de",
  flyerOrder: "medizintechnik@kaasen.de",
  proContact: "medizintechnik@kaasen.de",
  proAccessRequest: "medizintechnik@kaasen.de",
  webinarRegistration: "medizintechnik@kaasen.de",
} as const;

async function mockSubmit(endpoint: string, recipient: string | null, payload: object): Promise<SubmissionResult> {
  console.log(`[mock] POST ${endpoint}${recipient ? ` → mail to ${recipient}` : ""}`, payload);
  await wait(MOCK_LATENCY_MS);
  return { id: crypto.randomUUID(), receivedAt: new Date().toISOString() };
}

export function submitPrescriptionRequest(payload: PrescriptionRequest) {
  return mockSubmit("/submissions/prescription", submissionRecipients.prescription, payload);
}

export function submitBreastPumpOrder(payload: BreastPumpOrder) {
  return mockSubmit("/submissions/breast-pump-order", submissionRecipients.breastPumpOrder, payload);
}

export function submitContactRequest(payload: ContactRequest) {
  return mockSubmit("/submissions/contact", submissionRecipients.contact, payload);
}

export function submitWithdrawal(payload: WithdrawalRequest) {
  return mockSubmit("/submissions/withdrawal", submissionRecipients.withdrawal, payload);
}

export function submitFlyerOrder(payload: FlyerOrder) {
  return mockSubmit("/submissions/flyer-order", submissionRecipients.flyerOrder, payload);
}

export function submitProContactRequest(payload: ProContactRequest) {
  return mockSubmit("/submissions/pro-contact", submissionRecipients.proContact, payload);
}

export function submitProAccessRequest(payload: ProAccessRequest) {
  return mockSubmit("/submissions/pro-access-request", submissionRecipients.proAccessRequest, payload);
}

export function submitWebinarRegistration(payload: WebinarRegistration) {
  return mockSubmit("/submissions/webinar-registration", submissionRecipients.webinarRegistration, payload);
}

/** Newsletter is design-only for now (GetResponse later). */
export function submitNewsletterSignup(payload: NewsletterSignup) {
  return mockSubmit("/newsletter/subscribe", null, payload);
}
