"use client";

import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, LockIcon } from "@/components/ui/Icons";
import { formatEuro } from "@/lib/format";
import type { Product } from "@/lib/types";
import { useProArea } from "./ProAreaProvider";

/** Locked until login: pro price ("Fachpersonenpreis nach Login") and documents ("Unterlagen (Login)"). */
export function ProProductCard({ product }: { product: Product }) {
  const { user, openLogin, openDocuments } = useProArea();
  const pro = product.pro;
  if (!pro) return null;

  const name = pro.name ?? product.name;
  const href = product.isRental ? "/#kMilchpumpe" : product.hasProductPage ? `/produkte/${product.slug}` : "/produkte";

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-[20px] border border-kaasen-blue/6 bg-cream">
      <div className="relative grid aspect-[4/3] place-items-center bg-white">
        <Image src={pro.image} alt={name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-contain p-[18px]" />
        <span className="absolute left-3 top-3 rounded-full bg-kaasen-blue px-2.5 py-[5px] text-[11px] font-bold uppercase tracking-[.1em] text-kaasen-yellow">
          {pro.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-[18px]">
        <h3 className="m-0 text-[17px]">{name}</h3>
        <p className="m-0 text-small leading-[1.55] text-ink/75 [text-wrap:pretty]">{pro.description}</p>
        {pro.accessories.length > 0 && (
          <div className="mt-1 flex flex-col gap-1.5 border-t border-dashed border-kaasen-blue/18 pt-2.5">
            <span className="text-[11px] font-bold uppercase tracking-label text-kaasen-blue/70">Zubehör</span>
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              {pro.accessories.map((accessory) => (
                <li key={accessory} className="flex items-center gap-2 text-[13px] font-semibold text-kaasen-blue">
                  <span aria-hidden="true" className="size-1.5 flex-none rounded-full bg-accent" />
                  {accessory}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto flex flex-col gap-3 border-t border-kaasen-blue/10 pt-3.5">
          {product.proPrice && !user && (
            <button type="button" onClick={openLogin} className="flex items-center gap-2 border-0 bg-transparent p-0 text-left text-[12.5px] font-bold text-accent hover:underline">
              <LockIcon size={14} />
              Fachpersonenpreis nach Login
            </button>
          )}
          {product.proPrice && user && (
            <div className="flex flex-wrap items-baseline justify-between gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-label text-accent">Fachpersonenpreis</span>
              <span className="flex items-baseline gap-1.5">
                <strong className="text-xl text-kaasen-blue">{formatEuro(product.proPrice.amount)}</strong>
                <span className="text-micro text-ink/70">{product.proPrice.unit}</span>
              </span>
            </div>
          )}
          {!product.proPrice && <span className="text-[12.5px] text-ink/70">Preis wie im Privatbereich</span>}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <Link href={href} className="text-small font-bold text-kaasen-blue hover:text-accent">
              Produktinfo →
            </Link>
            <button
              type="button"
              onClick={() => openDocuments(product.id)}
              aria-haspopup="dialog"
              className="inline-flex min-h-10 items-center gap-[7px] rounded-full bg-kaasen-yellow px-3.5 py-[9px] text-[12.5px] font-bold text-kaasen-blue transition-colors hover:bg-kaasen-blue hover:text-kaasen-yellow"
            >
              {user ? <DownloadIcon size={15} /> : <LockIcon size={14} />}
              {user ? "Unterlagen" : "Unterlagen (Login)"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
