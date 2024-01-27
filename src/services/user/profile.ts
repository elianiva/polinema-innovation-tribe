import { createSupabaseServerClient } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import type { Profile } from "~/schema/profile";

export async function fetchUserProfile(cookies: ReadonlyRequestCookies, usernameOrEmail: string): Promise<Profile | null> {
  const supabase = createSupabaseServerClient(cookies);

  const users = await supabase
    .from("profiles")
    .select(`
      id,
      email,
      username,
      fullname,
      bio,
      picture
    `)
    .or(`username.eq.${usernameOrEmail}, email.eq.${usernameOrEmail}`);
  if (users.data === null || users.data.length < 1) return null;
  const userData = users.data[0];
  return {
    id: userData.id,
    email: userData.email,
    username: userData.username,
    bio: userData.bio,
    fullname: userData.fullname,
    picture: userData.picture
  };
}