// Fachbereich login — DEMO ONLY (frontend). Credentials are public on purpose and the
// "session" lives in localStorage; nothing here is secure. The backend replaces
// loginPro/logoutPro with POST /pro/auth/login + /logout and an httpOnly session cookie.
import { MOCK_LATENCY_MS, wait } from "@/lib/api/config";
import type { ProUser } from "@/lib/types";
import type { ProLoginInput } from "@/lib/validation/fachbereich";

export const DEMO_PRO_CREDENTIALS = { email: "demo@kaasen.de", password: "kaasen2026" } as const;

const STORAGE_KEY = "kaasen-pro-session";

export class InvalidCredentialsError extends Error {
  constructor() {
    super("E-Mail oder Passwort ist nicht korrekt.");
  }
}

export async function loginPro({ email, password }: ProLoginInput): Promise<ProUser> {
  await wait(MOCK_LATENCY_MS);
  const isDemoUser =
    email.toLowerCase() === DEMO_PRO_CREDENTIALS.email && password === DEMO_PRO_CREDENTIALS.password;
  if (!isDemoUser) throw new InvalidCredentialsError();
  const user: ProUser = { email: DEMO_PRO_CREDENTIALS.email, name: "Demo Fachperson" };
  writeStoredSession(user);
  return user;
}

export async function logoutPro(): Promise<void> {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // storage unavailable — nothing to clear
  }
}

export function readStoredProSession(): ProUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && "email" in parsed && "name" in parsed) {
      return parsed as ProUser;
    }
    return null;
  } catch {
    return null;
  }
}

function writeStoredSession(user: ProUser) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch {
    // private mode — session lasts for this page view only
  }
}
