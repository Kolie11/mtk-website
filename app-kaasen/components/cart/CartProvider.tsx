"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CartLine = { productId: string; name: string; priceLabel: string; unitPrice: number; quantity: number };

export type CartItemInput = Omit<CartLine, "quantity">;

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: CartItemInput) => void;
  changeQuantity: (productId: string, delta: number) => void;
  remove: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "kaasen-cart";

function readStoredCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as CartLine[]) : [];
  } catch {
    return [];
  }
}

/** Cart state (localStorage). Checkout itself will be Shopify — see /kasse. */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLines(readStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // storage unavailable — cart lives for this session only
    }
  }, [lines, hydrated]);

  const add = useCallback((item: CartItemInput) => {
    setLines((current) => {
      const existing = current.find((line) => line.productId === item.productId);
      if (existing) {
        return current.map((line) => (line.productId === item.productId ? { ...line, quantity: line.quantity + 1 } : line));
      }
      return [...current, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const changeQuantity = useCallback((productId: string, delta: number) => {
    setLines((current) =>
      current
        .map((line) => (line.productId === productId ? { ...line, quantity: line.quantity + delta } : line))
        .filter((line) => line.quantity > 0),
    );
  }, []);

  const remove = useCallback((productId: string) => {
    setLines((current) => current.filter((line) => line.productId !== productId));
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: lines.reduce((sum, line) => sum + line.quantity, 0),
      total: lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      changeQuantity,
      remove,
    }),
    [lines, isOpen, add, changeQuantity, remove],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside <CartProvider>");
  return context;
}
