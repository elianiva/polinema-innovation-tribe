import { useQuery } from "@tanstack/react-query";
import type { Idea } from "~/types/Idea/Index/Idea";
import { supabaseBrowser } from "~/utils/supabase-browser";

type IdeaQueryResult = Record<string, string>;

export function useIdeas() {
  return useQuery<Idea[]>({
    queryKey: ["ideas"],
    queryFn: async () => {
      const ideas = await supabaseBrowser
        .from("ideas")
        .select(`
          id,
          title,
          description,
          problem,
          updated_at,
          created_at,
          users (
            *
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
  });
}
