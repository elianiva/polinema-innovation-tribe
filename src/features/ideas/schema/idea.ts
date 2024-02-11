import { z } from "zod";
import { type CommentSchema, commentSchema } from "~/features/ideas/schema/comment";
import { type TagSchema, tagSchema } from "~/features/ideas/schema/tag";

export const authorSchema = z.object({
  id: z.string(),
  fullname: z.string(),
  username: z.string(),
  picture: z.string()
});
export type AuthorSchema = z.infer<typeof authorSchema>;

export const ideaSchema = z.object({
  title: z.string().min(4),
  description: z.string().min(20),
  problem: z.string().min(10),
  solution: z.string().min(20),
});

export type IdeaSchema = z.infer<typeof ideaSchema> & {
  id: string;
  author: AuthorSchema;
  comments: CommentSchema[];
  tags: TagSchema[];
  updatedAt: Date;
}
