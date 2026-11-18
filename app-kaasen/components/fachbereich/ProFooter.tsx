import Link from "next/link";
import { proNav } from "@/lib/data/fachbereich";
import { company } from "@/lib/data/site";

const linkClass = "text-cream/78 hover:text-kaasen-yellow";

/** Block 8: footer. */
export function ProFooter() {
  return (
    <footer className="bg-kaasen-blue px-gutter pb-7 pt-[clamp(40px,5vw,64px)] text-cream/78 max-[800px]:px-4">
      <div className="mx-auto flex max-w-site flex-col gap-7">
        <div className="flex flex-wrap justify-between gap-7">
          <div className="flex max-w-[340px] flex-col gap-2.5">
            <strong className="text-lg text-cream">{company.name}</strong>
            <span className="text-small leading-[1.6]">
              {company.street} · {company.zip} {company.city}
              <br />
              {company.phoneDisplay} · {company.email}
            </span>
          </div>
          <nav aria-label="Fachbereich Fußzeile" className="flex flex-wrap content-start gap-x-[22px] gap-y-2.5 text-small">
            {proNav.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
            <Link href="/" className={linkClass}>
              Für Privatpersonen
            </Link>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-cream/14 pt-5 text-[12.5px]">
          <span>© 2026 {company.name}</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/impressum" className={linkClass}>Impressum</Link>
            <Link href="/datenschutz" className={linkClass}>Datenschutz</Link>
            <Link href="/agb" className={linkClass}>AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
