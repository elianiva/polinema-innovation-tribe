import { createSupabaseServerClient } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function fetchIdeaById(cookieStore: ReadonlyRequestCookies, id: string) {
  const supabase = createSupabaseServerClient(cookieStore);
  const ideas = await supabase
    .from("ideas")
    .select(`
      id,
      title,
      description,
      problem,
      solution,
      whatsapp,
      updated_at,
      created_at,
      users (
        id,
        username,
        bio,
        first_name,
        last_name,
        profile_image
      )
    `)
    .eq("id", id);
  if (ideas.data === null || ideas.data.length < 1) return null;

  const idea = ideas.data[0] as Record<string, any>;
  return {
    id: idea.id,
    author: {
      id: idea.users.id,
      username: idea.users.username,
      bio: idea.users.bio,
      whatsapp: idea.whatsapp,
      name: [idea.users.first_name, idea.users.last_name].join(" "),
      profileImage: idea.users.profile_image
    },
    comments: [],
    title: idea.title,
    updatedAt: new Date(idea.updated_at ?? Date.now()).getTime(),
    description: idea.description ?? "",
    solution: idea.solution,
    problem: idea.problem,
    tags: []
  };
}
