import { createSupabaseServerClient, supabaseBrowser } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function fetchTags(cookieStore: ReadonlyRequestCookies) {
  const supabase = createSupabaseServerClient(cookieStore);
  const result = await supabase.from("tags").select("id, name, slug, colour");
  return result.data ?? [];
}
