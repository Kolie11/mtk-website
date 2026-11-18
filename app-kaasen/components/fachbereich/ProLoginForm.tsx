"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { TextField } from "@/components/ui/TextField";
import { InvalidCredentialsError } from "@/lib/api/proAuth";
import { proLogin } from "@/lib/data/fachbereich";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { proLoginSchema, type ProLoginInput } from "@/lib/validation/fachbereich";
import { useProArea } from "./ProAreaProvider";

/** Demo login: demo@kaasen.de / kaasen2026 (frontend only, see lib/api/proAuth.ts). */
export function ProLoginForm() {
  const { login } = useProArea();
  const [authError, setAuthError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);

  async function submitLogin(input: ProLoginInput) {
    setAuthError(null);
    try {
      await login(input);
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        setAuthError(error.message);
        return;
      }
      throw error;
    }
  }

  const { status, errors, handleSubmit, isSubmitting } = useFormSubmission(proLoginSchema, submitLogin);

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <h2 id="pro-auth-title" className="m-0 text-[clamp(24px,3vw,30px)] leading-[1.15]">
        {proLogin.title}
      </h2>
      <p className="m-0 text-sm leading-[1.6] text-ink/80">{proLogin.text}</p>
      <TextField name="email" label="E-Mail" type="email" variant="plain" placeholder="name@praxis.de" autoComplete="username" error={errors.email} idPrefix="login-" />
      <TextField name="password" label="Passwort" type="password" variant="plain" placeholder="••••••••" autoComplete="current-password" error={errors.password} idPrefix="login-" />
      <button type="button" onClick={() => setResetSent(true)} className="self-end border-0 bg-transparent p-0 text-[12.5px] font-semibold text-accent hover:underline">
        Passwort vergessen?
      </button>
      {resetSent && (
        <p role="status" className="m-0 text-[12.5px] text-accent">
          {proLogin.forgotSent}
        </p>
      )}
      {authError && (
        <p role="alert" className="m-0 rounded-input bg-danger/10 px-3.5 py-3 text-small font-semibold text-danger">
          {authError}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="m-0 text-small font-semibold text-danger">
          Anmeldung fehlgeschlagen. Bitte später erneut versuchen.
        </p>
      )}
      <SubmitButton isSubmitting={isSubmitting}>Anmelden</SubmitButton>
      <p className="m-0 rounded-input bg-draft-bg px-3.5 py-2.5 text-micro leading-[1.5] text-draft-ink">{proLogin.demoHint}</p>
    </form>
  );
}
