import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { AudienceSwitch } from "@/components/layout/AudienceSwitch";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";

/** Public site shell (Privatpersonen): top bar, sticky header, footer, cart. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <SkipLink />
      <AudienceSwitch />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <CartDrawer />
      <OrganizationJsonLd />
    </CartProvider>
  );
}
