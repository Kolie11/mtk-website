import { errorTextClass } from "./fieldStyles";

export function fieldErrorId(name: string) {
  return `${name}-error`;
}

export function FieldError({ name, message }: { name: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={fieldErrorId(name)} className={errorTextClass}>
      {message}
    </span>
  );
}
