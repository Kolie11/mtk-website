"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { loginPro, logoutPro, readStoredProSession } from "@/lib/api/proAuth";
import type { ProUser } from "@/lib/types";
import type { ProLoginInput } from "@/lib/validation/fachbereich";

type ProAreaContextValue = {
  user: ProUser | null;
  login: (input: ProLoginInput) => Promise<void>;
  logout: () => void;
  loginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  flyerDrawerOpen: boolean;
  openFlyerDrawer: () => void;
  closeFlyerDrawer: () => void;
  documentsProductId: string | null;
  openDocuments: (productId: string) => void;
  closeDocuments: () => void;
  contactMode: "contact" | "flyer";
  setContactMode: (mode: "contact" | "flyer") => void;
};

const ProAreaContext = createContext<ProAreaContextValue | null>(null);

/** Client state of the Fachbereich: demo login (localStorage) and the drawers/modals. */
export function ProAreaProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ProUser | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [flyerDrawerOpen, setFlyerDrawerOpen] = useState(false);
  const [documentsProductId, setDocumentsProductId] = useState<string | null>(null);
  const [contactMode, setContactMode] = useState<"contact" | "flyer">("contact");

  useEffect(() => {
    setUser(readStoredProSession());
  }, []);

  const login = useCallback(async (input: ProLoginInput) => {
    const loggedIn = await loginPro(input);
    setUser(loggedIn);
    setLoginOpen(false);
  }, []);

  const logout = useCallback(() => {
    void logoutPro();
    setUser(null);
    setDocumentsProductId(null);
  }, []);

  const openDocuments = useCallback(
    (productId: string) => {
      if (user) setDocumentsProductId(productId);
      else setLoginOpen(true);
    },
    [user],
  );

  const value = useMemo<ProAreaContextValue>(
    () => ({
      user,
      login,
      logout,
      loginOpen,
      openLogin: () => setLoginOpen(true),
      closeLogin: () => setLoginOpen(false),
      flyerDrawerOpen,
      openFlyerDrawer: () => setFlyerDrawerOpen(true),
      closeFlyerDrawer: () => setFlyerDrawerOpen(false),
      documentsProductId,
      openDocuments,
      closeDocuments: () => setDocumentsProductId(null),
      contactMode,
      setContactMode,
    }),
    [user, login, logout, loginOpen, flyerDrawerOpen, documentsProductId, openDocuments, contactMode],
  );

  return <ProAreaContext.Provider value={value}>{children}</ProAreaContext.Provider>;
}

export function useProArea(): ProAreaContextValue {
  const context = useContext(ProAreaContext);
  if (!context) throw new Error("useProArea must be used inside <ProAreaProvider>");
  return context;
}
