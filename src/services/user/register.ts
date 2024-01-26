import type { RegistrationSchema } from "~/schema/registration";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { createSupabaseServerClient } from "~/utils/supabase";

export async function registerUser(cookieStore: ReadonlyRequestCookies, input: RegistrationSchema) {
  const supabase = createSupabaseServerClient(cookieStore);
  const { data, error } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {
        username: input.userName,
        first_name: input.firstName,
        last_name: input.lastName,
        // TODO: replace this with a nicer default bio
        bio: "Hi there! I'm a user",
        profile_image: `https://source.boringavatars.com/beam/120/${input.email}?colors=fca2e1,93b5ff,6be4dc,f9e3a9,4a6cb6`
      }
    }
  });
  if (error !== null) throw error;
  return data;
}