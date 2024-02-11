import type { IdeaSchema } from "~/features/ideas/schema/idea";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { createSupabaseServerClient } from "~/utils/supabase";

export async function createIdea(cookieStore: ReadonlyRequestCookies, input: IdeaSchema) {
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("User not found");

  return supabase.from("ideas").insert([
    {
      user_id: user.id,
      id: crypto.randomUUID().toString(),
      title: input.title,
      problem: input.problem,
      solution: input.solution,
      description: input.description
    }
  ]);
}
