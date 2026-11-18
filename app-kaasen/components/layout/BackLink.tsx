import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/Icons";

export function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 self-start text-[13px] font-bold text-accent hover:text-kaasen-blue">
      <ArrowLeftIcon size={14} strokeWidth={2.4} />
      {children}
    </Link>
  );
}
