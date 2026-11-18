/** Decorative double wave under the hero (brand motif). */
export function WaveDivider() {
  return (
    <svg viewBox="0 0 1400 60" preserveAspectRatio="none" aria-hidden="true" className="mx-auto mt-8 block h-[60px] w-full max-w-site">
      <path
        d="M0 30 C 175 -10, 350 70, 525 30 S 875 -10, 1050 30 S 1400 70, 1400 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-wave text-kaasen-blue opacity-[.38]"
      />
      <path d="M0 40 C 175 0, 350 80, 525 40 S 875 0, 1050 40 S 1400 80, 1400 40" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent opacity-20" />
    </svg>
  );
}
