import { HONEYPOT_FIELD } from "@/lib/validation/shared";

/** Spam trap: hidden from people and assistive tech, bots tend to fill it. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute left-[-10000px] top-auto size-px overflow-hidden">
      <label>
        Website
        <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
