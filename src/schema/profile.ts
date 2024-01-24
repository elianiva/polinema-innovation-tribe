import { z } from "zod";

export const profileSchema = z.object({
  id: z.string(),
  name: z.string(),
  bio: z.string(),
  username: z.string(),
  profileImage: z.string()
});
export type Profile = z.infer<typeof profileSchema>;