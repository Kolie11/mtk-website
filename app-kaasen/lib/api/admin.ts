// Admin (demo). Phase 1: UI only — data is loaded from the static layer and edited in
// local React state; nothing is persisted. Backend: authenticated CRUD endpoints for
// products, product pages, FAQ and partners (see docs/BACKEND.md §6).
import { MOCK_LATENCY_MS, wait } from "@/lib/api/config";

export const DEMO_ADMIN_CREDENTIALS = { email: "admin@kaasen.de", password: "kaasen2026" } as const;

export async function loginAdmin(email: string, password: string): Promise<boolean> {
  await wait(MOCK_LATENCY_MS);
  return email.trim().toLowerCase() === DEMO_ADMIN_CREDENTIALS.email && password === DEMO_ADMIN_CREDENTIALS.password;
}

/** Placeholder for PUT/POST/DELETE calls — logs what the backend would receive. */
export async function saveAdminChange(resource: string, payload: unknown): Promise<void> {
  console.log(`[mock] admin save ${resource}`, payload);
  await wait(MOCK_LATENCY_MS / 2);
}
