import type { Idea } from "~/types/Idea/Index/Idea";
import { createSupabaseServerClient } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

type IdeaQueryResult = Record<string, any>;

export async function fetchIdeas(cookieStore: ReadonlyRequestCookies) {
  const supabase = createSupabaseServerClient(cookieStore);
  const { data: ideas } = await supabase
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
        email,
        username,
        fullname,
        picture
      )
    `);
  if (ideas === null) return [];

  const mappedData: Idea[] = (
    ideas as unknown as IdeaQueryResult[]
  ).map((idea) => ({
    id: idea.id,
    author: {
      id: idea.profiles.id,
      username: idea.profiles.username,
      fullname: idea.profiles.fullname,
      picture: idea.profiles.picture
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