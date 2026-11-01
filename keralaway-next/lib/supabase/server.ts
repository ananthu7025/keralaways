import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/** Public-read client, safe for Server Components. Respects RLS (published rows only). */
export function createServerClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

/**
 * Service-role client — bypasses RLS. Server-only, never import from a Client Component.
 * Used exclusively by admin routes/actions after the admin password check.
 */
export function createServiceRoleClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
