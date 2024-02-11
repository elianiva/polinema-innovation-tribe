import { z } from "zod";

export const profileSchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  fullname: z.string(),
  picture: z.string(),
  bio: z.string()
});
export type Profile = z.infer<typeof profileSchema>;