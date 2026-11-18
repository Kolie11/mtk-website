/** Clearly marks the admin as a frontend demo. */
export function DemoBanner() {
  return (
    <p role="note" className="m-0 flex flex-wrap items-center gap-2 rounded-input border border-draft-ink/20 bg-draft-bg px-4 py-3 text-small text-draft-ink">
      <strong className="rounded-full bg-draft-ink px-2.5 py-0.5 text-[11px] uppercase tracking-[.1em] text-draft-bg">Demo – Backend folgt</strong>
      Änderungen werden nur im Browser gehalten und beim Neuladen verworfen.
    </p>
  );
}
