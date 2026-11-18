// Data access configuration.
//
// Phase 1 (now): every function in lib/api/* resolves static data from lib/data/*
// and form submissions are mocked (console.log + success).
// Phase 2 (backend team): set NEXT_PUBLIC_API_BASE_URL and replace the function
// bodies in lib/api/* with real `fetch` calls. Components never import lib/data
// directly, so no component has to change. Contract: docs/BACKEND.md.

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

/** Simulated network latency for mocked submissions, so loading states are visible. */
export const MOCK_LATENCY_MS = 700;

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
