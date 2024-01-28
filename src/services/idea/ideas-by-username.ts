import { createSupabaseServerClient } from "~/utils/supabase";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import type { IdeaSchema } from "~/schema/idea";

type IdeaQueryResult = Record<string, any>;

export async function fetchIdeasByUsername(cookieStore: ReadonlyRequestCookies, username: string): Promise<IdeaSchema[]> {
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
    `)
    .eq("profiles.username", username);
  if (ideas === null) return [];

  return (
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
    updatedAt: new Date(idea.updated_at ?? Date.now()),
    description: idea.description ?? "",
    problem: idea.problem,
    solution: idea.solution,
    tags: []
  }));
}