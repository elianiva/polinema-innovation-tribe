import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "~/components/Supabase";
import type { definitions } from "~/generated-types";
import type { Idea } from "~/types/Idea/Index/Idea";

type IdeaQueryResult = Pick<definitions["ideas"], "id" | "title" | "description" | "problem" | "updated_at" | "created_at"> & {
  users: Pick<definitions["profiles"], "id" | "bio" | "first_name" | "last_name" | "username" | "profile_image">
}

export function useIdeas() {
  const { supabase } = useSupabase();
  return useQuery<Idea[]>({
    queryKey: ["ideas"],
    queryFn: async () => {
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
