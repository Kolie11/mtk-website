// Visual variants of form fields found in the design:
//  caps  – uppercase label above a white input (order forms, Fachbereich)
//  plain – small label above a white input (prescription, withdrawal)
//  soft  – visually hidden label, cream input (contact forms)

export type FieldVariant = "caps" | "plain" | "soft";

export const labelClass: Record<FieldVariant, string> = {
  caps: "flex min-w-0 flex-col gap-1.5 text-micro font-bold uppercase tracking-[.06em] text-kaasen-blue",
  plain: "flex min-w-0 flex-col gap-1 text-micro font-semibold text-kaasen-blue",
  soft: "flex min-w-0 flex-col gap-1",
};

export const labelTextClass: Record<FieldVariant, string> = {
  caps: "",
  plain: "",
  soft: "sr-only",
};

const controlBase =
  "w-full min-w-0 border text-ink normal-case tracking-normal font-medium placeholder:text-ink/50 focus:outline-none focus:border-kaasen-blue aria-[invalid=true]:border-danger";

export const controlClass: Record<FieldVariant, string> = {
  caps: `${controlBase} rounded-input border-line-strong bg-white px-4 py-[13px] text-[14.5px]`,
  plain: `${controlBase} rounded-input border-line-strong bg-white px-3.5 py-3 text-sm`,
  soft: `${controlBase} rounded-field border-line-strong bg-cream px-[18px] py-[15px] text-sm focus:bg-white`,
};

export const errorTextClass = "text-micro font-semibold normal-case tracking-normal text-danger";
