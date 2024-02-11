import { z } from "zod";

export const tagSchema = z.object({
  name: z.string(),
  slug: z.string(),
  colour: z.string()
});
export type TagSchema = z.infer<typeof tagSchema>;