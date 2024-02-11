import type { AuthSchema } from "~/features/authentication/schema/auth";
import { createSupabaseServerClient, supabaseBrowser } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function loginWithCredentials(cookieStore: ReadonlyRequestCookies, input: AuthSchema) {
  const supabase = createSupabaseServerClient(cookieStore);
  const { error } = await supabase.auth.signInWithPassword(input);
  if (error !== null) {
    throw error;
  }
}