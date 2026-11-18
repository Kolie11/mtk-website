import Link from "next/link";
import { WithdrawalButton } from "@/components/modals/WithdrawalButton";
import { FacebookIcon, InstagramIcon, MailIcon } from "@/components/ui/Icons";
import { getPartners } from "@/lib/api/content";
import { company, footer } from "@/lib/data/site";
import { BackToTopButton } from "./BackToTopButton";
import { Logo } from "./Logo";
import { PartnerLogos } from "./PartnerLogos";

const socialClass =
  "grid size-9 place-items-center rounded-full border border-cream/20 text-cream hover:border-kaasen-yellow hover:bg-kaasen-yellow hover:text-kaasen-blue";

export async function SiteFooter() {
  const partners = await getPartners();

  return (
    <footer className="bg-kaasen-blue text-cream/75">
      <div className="mx-auto max-w-site px-gutter pb-[30px] pt-[clamp(44px,5vw,72px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-9 max-sm:grid-cols-1 max-sm:text-center">
          <div className="flex flex-col gap-3.5 max-sm:items-center">
            <span className="self-start rounded-input bg-cream px-3 py-2 max-sm:self-center">
              <Logo className="h-8 w-auto" />
            </span>
            <p className="m-0 max-w-[24em] text-sm leading-[1.65]">
              <strong className="font-bold text-cream">{footer.descriptionStrong}</strong> {footer.description}
            </p>
            <p className="m-0 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[12.5px] leading-[1.6] max-sm:justify-center">
              <a href={company.phoneHref} className="whitespace-nowrap text-cream/75 hover:text-kaasen-yellow">{footer.phone}</a>
              <span className="whitespace-nowrap">{footer.fax}</span>
            </p>
            <div className="mt-1.5 flex gap-2.5">
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
                <FacebookIcon />
              </a>
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
                <InstagramIcon />
              </a>
              <a href={`mailto:${company.email}`} aria-label="E-Mail" className={socialClass}>
                <MailIcon strokeWidth={2} />
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-2.5 text-sm max-sm:items-center">
              <h2 className="m-0 text-[11px] font-normal uppercase tracking-[.2em] text-cream/40">{column.title}</h2>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-cream/72 hover:text-kaasen-yellow">
                  {link.label}
                </Link>
              ))}
              {column.title === "Rechtliches" && <WithdrawalButton />}
            </nav>
          ))}
        </div>

        <PartnerLogos partners={partners} />

        <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-cream/14 pt-6 text-[12.5px] text-cream/50 max-sm:flex-col max-sm:text-center">
          <span>{footer.copyright}</span>
          <span className="flex items-center gap-[18px]">
            <Link href="/admin" className="text-cream/50 hover:text-kaasen-yellow">Admin-Login</Link>
            <span>{footer.madeIn}</span>
            <BackToTopButton />
          </span>
        </div>
      </div>
    </footer>
  );
}
