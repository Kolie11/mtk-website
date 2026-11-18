"use client";

import { buttonClass } from "@/components/ui/buttonStyles";
import { LockIcon } from "@/components/ui/Icons";
import { useProArea } from "./ProAreaProvider";

/** Header: "Login" button, or the user e-mail + "Abmelden" after login. */
export function ProAccountControls() {
  const { user, openLogin, logout } = useProArea();

  if (!user) {
    return (
      <button type="button" onClick={openLogin} className={buttonClass("primary", "sm", "text-[13px]")}>
        <LockIcon size={14} />
        Login
      </button>
    );
  }

  return (
    <span className="flex items-center gap-2 rounded-full border border-kaasen-blue/12 bg-white py-1.5 pl-3 pr-1.5">
      <span aria-hidden="true" className="size-2 flex-none rounded-full bg-success" />
      <span className="max-w-[180px] truncate text-[12.5px] font-semibold text-kaasen-blue">
        <span className="sr-only">Angemeldet als </span>
        {user.email}
      </span>
      <button type="button" onClick={logout} className={buttonClass("primary", "sm", "min-h-8 px-3 py-[7px] text-micro")}>
        Abmelden
      </button>
    </span>
  );
}
