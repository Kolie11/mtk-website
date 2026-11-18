"use client";

import { useEffect, useRef } from "react";

type DialogPlacement = "center" | "right";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  /** id of the visible heading that names the dialog */
  labelledBy?: string;
  /** fallback accessible name when there is no visible heading */
  label?: string;
  placement?: DialogPlacement;
  /** close when the dimmed backdrop is clicked (default true) */
  closeOnBackdrop?: boolean;
  /** Esc closes the dialog (default true) */
  closeOnEscape?: boolean;
  className?: string;
  children: React.ReactNode;
};

const placementClass: Record<DialogPlacement, string> = {
  center:
    "m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] animate-fade-up overflow-auto rounded-panel",
  right: "my-0 ml-auto mr-0 h-dvh max-h-dvh w-full animate-fade-up overflow-hidden",
};

/**
 * Accessible modal built on the native <dialog> element:
 * showModal() makes the rest of the page inert (focus trap), Esc closes,
 * focus returns to the trigger, page scroll is locked while open.
 */
export function Dialog({
  open,
  onClose,
  labelledBy,
  label,
  placement = "center",
  closeOnBackdrop = true,
  closeOnEscape = true,
  className = "",
  children,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      triggerRef.current = document.activeElement;
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (!open && dialog.open) {
      dialog.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) return;
    document.documentElement.style.overflow = "";
    if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus();
    triggerRef.current = null;
  }, [open]);

  function handleCancel(event: React.SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault();
    if (closeOnEscape) onClose();
  }

  function handleClick(event: React.MouseEvent<HTMLDialogElement>) {
    if (closeOnBackdrop && event.target === dialogRef.current) onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      aria-modal="true"
      onCancel={handleCancel}
      onClick={handleClick}
      className={`border-0 bg-transparent p-0 text-ink backdrop:bg-kaasen-blue/55 backdrop:backdrop-blur-[4px] ${placementClass[placement]} ${className}`}
    >
      {open && children}
    </dialog>
  );
}
