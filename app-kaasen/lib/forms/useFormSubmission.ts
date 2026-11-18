"use client";

import { useCallback, useState, type FormEvent } from "react";
import type { z } from "zod";
import { HONEYPOT_FIELD } from "@/lib/validation/shared";

export type SubmissionStatus = "idle" | "submitting" | "success" | "error";
export type FieldErrors = Partial<Record<string, string>>;

/** FormData → plain object; repeated keys (e.g. checkbox groups) become arrays. */
function formDataToObject(formData: FormData): Record<string, FormDataEntryValue | FormDataEntryValue[]> {
  const result: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};
  for (const key of new Set(formData.keys())) {
    const values = formData.getAll(key);
    result[key] = values.length > 1 ? values : values[0];
  }
  return result;
}

function toFieldErrors(error: z.ZodError): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of error.issues) {
    const field = String(issue.path[0] ?? "form");
    errors[field] ??= issue.message;
  }
  return errors;
}

function focusFirstInvalidField(form: HTMLFormElement, errors: FieldErrors) {
  const firstName = Object.keys(errors)[0];
  if (!firstName) return;
  const field = form.querySelector<HTMLElement>(`[name="${firstName}"]`);
  field?.focus();
}

/**
 * Client-side form handling: zod validation, field errors, loading/success/error state.
 * `submit` receives the parsed payload — in phase 1 a mocked lib/api function.
 */
export function useFormSubmission<Schema extends z.ZodType>(
  schema: Schema,
  submit: (payload: z.output<Schema>) => Promise<unknown>,
) {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const values = formDataToObject(new FormData(form));

      if (values[HONEYPOT_FIELD]) {
        setStatus("success");
        return;
      }

      const result = schema.safeParse(values);
      if (!result.success) {
        const fieldErrors = toFieldErrors(result.error);
        setErrors(fieldErrors);
        focusFirstInvalidField(form, fieldErrors);
        return;
      }

      setErrors({});
      setStatus("submitting");
      try {
        await submit(result.data);
        form.reset();
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [schema, submit],
  );

  const reset = useCallback(() => {
    setErrors({});
    setStatus("idle");
  }, []);

  return { status, errors, handleSubmit, reset, isSubmitting: status === "submitting" };
}
