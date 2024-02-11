import { z } from "zod";

export const commentSchema = z.object({
  id: z.number(),
  authorId: z.string(),
  text: z.string()
});
export type CommentSchema = z.infer<typeof commentSchema>;