import type { UserQueryResult } from "~/services/user/user-query-result";
import { createSupabaseServerClient } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function fetchUserProfile(cookies: ReadonlyRequestCookies) {
  const supabase = createSupabaseServerClient(cookies);
  const { data: { user } } = await supabase.auth.getUser();
  if (user === null) return null;
  const users = await supabase
    .from("users")
    .select(`
      id,
      username,
      bio,
      first_name,
      last_name,
      profile_image
    `)
    .eq("id", user.id);
  if (users.data === null || users.data.length < 1) return null;
  const userData = users.data[0] as UserQueryResult;
  return {
    id: userData.id,
    username: userData.username,
    bio: userData.bio,
    name: [userData.first_name, userData.last_name].join(" "),
    profileImage: userData.profile_image
  };
}