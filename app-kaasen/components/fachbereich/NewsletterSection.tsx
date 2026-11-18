"use client";

import { FieldError, fieldErrorId } from "@/components/ui/FieldError";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { submitNewsletterSignup } from "@/lib/api/submissions";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { newsletterSchema } from "@/lib/validation/fachbereich";

/** Block 6: professional newsletter (design only — GetResponse later). */
export function NewsletterSection() {
  const { status, errors, handleSubmit, isSubmitting } = useFormSubmission(newsletterSchema, submitNewsletterSignup);

  return (
    <section aria-labelledby="f-newsletter-title" className="px-gutter py-[clamp(48px,6vw,80px)] max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-6 rounded-modal bg-kaasen-yellow p-[clamp(26px,4vw,48px)] text-kaasen-blue max-sm:rounded-[16px]">
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-2.5">
          <span className="text-[11px] font-bold uppercase tracking-[.2em]">Fachkreis-Newsletter</span>
          <h2 id="f-newsletter-title" className="m-0 text-[clamp(26px,3vw,40px)] leading-[1.1]">
            Neue Webinare &amp; Produktinfos direkt ins Postfach.
          </h2>
        </div>
        {status === "success" ? (
          <p role="status" className="m-0 flex-[1_1_380px] text-base font-bold">
            Danke! Bitte bestätigen Sie Ihre Anmeldung in der E-Mail.
          </p>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="flex min-w-0 flex-[1_1_380px] flex-wrap gap-2.5">
            <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="E-Mail-Adresse"
                aria-label="E-Mail-Adresse"
                autoComplete="email"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? fieldErrorId("newsletter-email") : undefined}
                className="min-w-0 rounded-full border border-kaasen-blue/20 bg-white px-[18px] py-[15px] text-[14.5px] text-ink focus:border-kaasen-blue focus:outline-none"
              />
              <FieldError name="newsletter-email" message={errors.email} />
            </div>
            <SubmitButton isSubmitting={isSubmitting} className="text-[14.5px]">
              Newsletter abonnieren
            </SubmitButton>
          </form>
        )}
      </div>
    </section>
  );
}
