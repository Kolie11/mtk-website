"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { TextField } from "@/components/ui/TextField";
import { DEMO_ADMIN_CREDENTIALS, loginAdmin } from "@/lib/api/admin";
import { DemoBanner } from "./DemoBanner";

export function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubmitting(true);
    setError(null);
    const ok = await loginAdmin(String(data.get("email") ?? ""), String(data.get("password") ?? ""));
    setSubmitting(false);
    if (ok) onSuccess();
    else setError("E-Mail oder Passwort ist nicht korrekt.");
  }

  return (
    <div className="grid min-h-screen grid-cols-2 bg-cream max-[820px]:grid-cols-1">
      <aside className="flex flex-col justify-between gap-8 bg-kaasen-blue p-12 text-cream max-[820px]:hidden">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="grid size-11 place-items-center rounded-input bg-kaasen-yellow text-xl font-extrabold text-kaasen-blue">K</span>
          <span className="flex flex-col">
            <strong>Medizintechnik Kaasen</strong>
            <span className="text-micro text-cream/70">Verwaltung</span>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="m-0 text-h2-md text-cream">Willkommen zurück im Kaasen-Backoffice.</h2>
          <p className="m-0 text-body text-cream/75">Produkte pflegen, Rezept-Anfragen bearbeiten und Seiteninhalte anpassen — alles an einem Ort.</p>
        </div>
        <span className="text-micro text-cream/50">© 2026 Medizintechnik Kaasen GmbH · Lünen</span>
      </aside>
      <main className="flex flex-col justify-center gap-6 p-[clamp(24px,6vw,64px)]">
        <DemoBanner />
        <form onSubmit={handleSubmit} className="flex w-full max-w-[420px] flex-col gap-4">
          <span className="eyebrow text-accent">Anmeldung</span>
          <h1 className="m-0 text-h3">Als Administrator anmelden</h1>
          <TextField name="email" label="E-Mail" type="email" variant="plain" autoComplete="username" defaultValue={DEMO_ADMIN_CREDENTIALS.email} idPrefix="adm-" />
          <TextField name="password" label="Passwort" type="password" variant="plain" autoComplete="current-password" idPrefix="adm-" />
          {error && (
            <p role="alert" className="m-0 rounded-input bg-danger/10 px-3.5 py-3 text-small font-semibold text-danger">
              {error}
            </p>
          )}
          <SubmitButton isSubmitting={submitting}>Anmelden</SubmitButton>
          <p className="m-0 text-micro text-ink/60">
            Demo-Zugang · {DEMO_ADMIN_CREDENTIALS.email} / {DEMO_ADMIN_CREDENTIALS.password}
          </p>
        </form>
      </main>
    </div>
  );
}
