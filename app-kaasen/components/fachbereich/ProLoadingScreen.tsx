import { Logo } from "@/components/layout/Logo";
import { proGate } from "@/lib/data/fachbereich";

/** 5-second loading screen after "Ja, ich bin Fachperson" (blue, logo, spinner, yellow progress). */
export function ProLoadingScreen() {
  return (
    <div role="status" aria-live="polite" className="fixed inset-0 z-[110] grid animate-fade-up place-items-center bg-kaasen-blue p-6 text-cream">
      <div className="flex w-[min(360px,100%)] flex-col items-center gap-[26px] text-center">
        <div className="rounded-tile bg-cream px-5 py-3.5">
          <Logo className="h-[38px] w-auto" />
        </div>
        <span aria-hidden="true" className="size-[46px] animate-spin-slow rounded-full border-[3px] border-cream/18 border-t-kaasen-yellow" />
        <div className="flex flex-col gap-2">
          <strong className="text-xl font-bold">{proGate.loadingTitle}</strong>
          <span className="text-sm text-cream/75">{proGate.loadingText}</span>
        </div>
        <div aria-hidden="true" className="h-1 w-full overflow-hidden rounded-full bg-cream/15">
          <div className="h-full origin-left animate-progress bg-kaasen-yellow" />
        </div>
      </div>
    </div>
  );
}
