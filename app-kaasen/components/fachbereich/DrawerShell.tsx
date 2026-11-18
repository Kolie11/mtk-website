"use client";

import { CloseButton } from "@/components/ui/CloseButton";
import { Dialog } from "@/components/ui/Dialog";

type DrawerShellProps = {
  open: boolean;
  onClose: () => void;
  titleId: string;
  eyebrow: string;
  title: string;
  subtitle?: React.ReactNode;
  widthClass: string;
  children: React.ReactNode;
};

/** Right-side drawer layout shared by the flyer and the documents drawer. */
export function DrawerShell({ open, onClose, titleId, eyebrow, title, subtitle, widthClass, children }: DrawerShellProps) {
  return (
    <Dialog open={open} onClose={onClose} labelledBy={titleId} placement="right" className={widthClass}>
      <div className="flex h-full flex-col bg-cream shadow-drawer">
        <div className="flex items-start justify-between gap-3 border-b border-kaasen-blue/10 px-6 py-[22px]">
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[11px] font-bold uppercase tracking-[.18em] text-accent">{eyebrow}</span>
            <h2 id={titleId} className="m-0 text-[22px]">
              {title}
            </h2>
            {subtitle}
          </div>
          <CloseButton onClick={onClose} />
        </div>
        <div className="flex flex-1 flex-col gap-2 overflow-auto px-6 pb-6 pt-3">{children}</div>
      </div>
    </Dialog>
  );
}
