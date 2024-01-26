import type { Idea } from "~/types/Idea/Index/Idea";
import { createSupabaseServerClient } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

type IdeaQueryResult = Record<string, any>;

export async function fetchIdeas(cookieStore: ReadonlyRequestCookies) {
  const supabase = createSupabaseServerClient(cookieStore);
  const ideas = await supabase
    .from("ideas")
    .select(`
      id,
      title,
      description,
      problem,
      updated_at,
      created_at,
      users (
        id,
        username,
        bio,
        email,
      )
    `);
  if (ideas.data === null) return [];

  const mappedData: Idea[] = (
    ideas.data as unknown as IdeaQueryResult[]
  ).map((idea) => ({
    id: idea.id,
    author: {
      id: idea.users.id,
      username: idea.users.username,
      bio: idea.users.bio,
      name: [idea.users.first_name, idea.users.last_name].join(" "),
      profileImage: idea.users.profile_image
    },
    comments: [],
    title: idea.title,
    updatedAt: new Date(idea.updated_at ?? Date.now()).getTime(),
    description: idea.description ?? "",
    problem: idea.problem,
    tags: []
  }));
  return mappedData;
}