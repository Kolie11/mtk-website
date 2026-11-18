"use client";

import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Dialog } from "@/components/ui/Dialog";
import { proLogin } from "@/lib/data/fachbereich";
import { ProAccessRequestForm } from "./ProAccessRequestForm";
import { ProLoginForm } from "./ProLoginForm";
import { useProArea } from "./ProAreaProvider";

type AuthTab = "login" | "register";

const tabClass = (active: boolean) =>
  `rounded-full border-0 p-2.5 text-small font-bold ${active ? "bg-kaasen-blue text-kaasen-yellow" : "bg-transparent text-kaasen-blue hover:bg-kaasen-blue/6"}`;

/** Login (demo) + "Zugang beantragen" + "Ohne Login weiter". */
export function ProLoginDialog() {
  const { loginOpen, closeLogin } = useProArea();
  const [tab, setTab] = useState<AuthTab>("login");

  return (
    <Dialog open={loginOpen} onClose={closeLogin} labelledBy="pro-auth-title" className="max-w-[480px] backdrop:bg-kaasen-blue/72 backdrop:backdrop-blur-[6px]">
      <div className="flex flex-col gap-[18px] rounded-modal bg-cream p-[clamp(24px,4vw,36px)]">
        <Logo className="h-9 w-auto self-start" />
        <div role="tablist" aria-label="Anmeldung" className="grid grid-cols-2 gap-1 rounded-full border border-kaasen-blue/10 bg-white p-1">
          <button type="button" role="tab" aria-selected={tab === "login"} onClick={() => setTab("login")} className={tabClass(tab === "login")}>
            Anmelden
          </button>
          <button type="button" role="tab" aria-selected={tab === "register"} onClick={() => setTab("register")} className={tabClass(tab === "register")}>
            Zugang beantragen
          </button>
        </div>
        <div role="tabpanel">{tab === "login" ? <ProLoginForm /> : <ProAccessRequestForm />}</div>
        <button type="button" onClick={closeLogin} className="self-center border-0 bg-transparent p-2 text-[13px] font-semibold text-ink/75 hover:text-kaasen-blue">
          {proLogin.skip}
        </button>
      </div>
    </Dialog>
  );
}
