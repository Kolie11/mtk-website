import Link from "next/link";
import { buttonClass } from "@/components/ui/buttonStyles";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-screen place-items-center bg-cream px-gutter">
      <div className="flex max-w-[520px] flex-col items-start gap-4">
        <span className="eyebrow text-accent">Fehler 404</span>
        <h1 className="text-h2-md">Diese Seite gibt es nicht.</h1>
        <p className="m-0 text-body text-ink/75">Vielleicht hilft Ihnen unsere Startseite weiter.</p>
        <Link href="/" className={buttonClass("primary", "md")}>
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
