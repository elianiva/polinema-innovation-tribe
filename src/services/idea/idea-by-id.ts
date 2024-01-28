import { createSupabaseServerClient } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import type { IdeaSchema } from "~/schema/idea";

export async function fetchIdeaById(cookieStore: ReadonlyRequestCookies, id: string): Promise<IdeaSchema | null> {
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: ideas, error } = await supabase
    .from("ideas")
    .select(`
      id,
      title,
      description,
      problem,
      solution,
      updated_at,
      created_at,
      profiles (
        id,
        fullname,
        username,
        picture
      )
    `)
    .eq("id", id);
  if (ideas === null || ideas.length < 1) return null;

  const idea = ideas[0] as Record<string, any>;
  return {
    id: idea.id,
    author: {
      id: idea.profiles.id,
      fullname: idea.profiles.fullname,
      username: idea.profiles.username,
      picture: idea.profiles.picture
    },
    comments: [],
    title: idea.title,
    description: idea.description ?? "",
    solution: idea.solution,
    problem: idea.problem,
    tags: [],
    updatedAt: new Date(idea.updated_at ?? Date.now())
  };
}
