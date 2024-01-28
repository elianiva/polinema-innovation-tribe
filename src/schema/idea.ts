import { z } from "zod";

export const ideaSchema = z.object({
  title: z.string().min(4),
  description: z.string().min(20),
  problem: z.string().min(10),
  solution: z.string().min(20),
});

export type IdeaSchema = z.infer<typeof ideaSchema>;
