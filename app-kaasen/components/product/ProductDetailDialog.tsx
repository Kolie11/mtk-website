"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { buttonClass } from "@/components/ui/buttonStyles";
import { CloseButton } from "@/components/ui/CloseButton";
import { Dialog } from "@/components/ui/Dialog";
import type { Product } from "@/lib/types";
import { ProductImage } from "./ProductImage";

type ProductDetailDialogProps = { product: Product; open: boolean; onClose: () => void };

const insuranceStatuses = new Set(["listed", "unlisted"]);

export function ProductDetailDialog({ product, open, onClose }: ProductDetailDialogProps) {
  const router = useRouter();
  const titleId = `detail-${product.id}`;
  const isInsuranceProduct = insuranceStatuses.has(product.insurance);
  const isPriced = product.price.amount !== null;

  function goTo(hash: string) {
    onClose();
    router.push(`/${hash}`);
  }

  return (
    <Dialog open={open} onClose={onClose} labelledBy={titleId} className="max-w-[820px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] bg-cream">
        <div className="relative min-h-[260px]" style={{ backgroundColor: product.image?.background ?? "#ffffff" }}>
          <ProductImage image={product.image ? { ...product.image, fit: "contain", padded: true } : null} alt={product.name} sizes="(max-width: 640px) 100vw, 410px" padClass="p-6" />
          <span className="absolute left-4 top-4 rounded-full bg-kaasen-blue px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.1em] text-kaasen-yellow">
            {product.category}
          </span>
        </div>
        <div className="flex flex-col gap-3.5 p-[clamp(22px,3vw,32px)]">
          <div className="flex items-start justify-between gap-3">
            <h2 id={titleId} className="m-0 text-h3">
              {product.name}
            </h2>
            <CloseButton onClick={onClose} />
          </div>
          <p className="m-0 text-body leading-[1.65] text-ink/80 [text-wrap:pretty]">{product.description}</p>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {product.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-tag-bg px-2.5 py-[5px] text-[11px] font-semibold text-accent">
                {tag}
              </li>
            ))}
          </ul>
          {isInsuranceProduct && (
            <div className="flex flex-col gap-2 rounded-[16px] bg-kaasen-blue px-4 py-3.5 text-cream">
              <strong className="text-sm text-kaasen-yellow">Mit Rezept zur Krankenkasse</strong>
              <span className="text-small leading-[1.55]">Laden Sie Ihr Rezept hoch — wir prüfen die Kostenübernahme für Sie.</span>
              <button type="button" onClick={() => goTo("#kRezept")} className={buttonClass("yellow", "sm", "self-start")}>
                Rezept hochladen
              </button>
            </div>
          )}
          <div className="mt-auto flex flex-col gap-3 border-t border-kaasen-blue/10 pt-3.5">
            <div className="flex flex-col gap-0.5">
              <span className="label-caps text-kaasen-blue/75">Direkt kaufen</span>
              <strong className="text-2xl font-extrabold text-kaasen-blue">{isPriced ? product.price.label : "Preis auf Anfrage"}</strong>
              <span className="text-[11.5px] leading-[1.5] text-ink/70">
                inkl. MwSt., zzgl.{" "}
                <Link href="/versand" className="text-kaasen-blue underline">Versandkosten</Link> · Es gelten unsere{" "}
                <Link href="/agb" className="text-kaasen-blue underline">AGB</Link> und die{" "}
                <Link href="/widerrufsbelehrung" className="text-kaasen-blue underline">Widerrufsbelehrung</Link>.
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <AddToCartButton product={product} label="Kaufen" size="md" onAdded={onClose} />
              <button type="button" onClick={() => goTo("#kKontakt")} className={buttonClass("outline", "md")}>
                Beratung anfragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
