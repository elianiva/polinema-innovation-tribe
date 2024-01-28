import { z } from "zod";
import { commentSchema } from "~/schema/comment";
import { tagSchema } from "~/schema/tag";

export const authorSchema = z.object({
  id: z.string(),
  fullname: z.string(),
  username: z.string(),
  picture: z.string()
});
export type AuthorSchema = z.infer<typeof authorSchema>;

export const ideaSchema = z.object({
  id: z.string(),
  title: z.string().min(4),
  description: z.string().min(20),
  problem: z.string().min(10),
  solution: z.string().min(20),
  author: authorSchema,
  comments: z.array(commentSchema),
  tags: z.array(tagSchema),
  updatedAt: z.date(),
});

export type IdeaSchema = z.infer<typeof ideaSchema>;
