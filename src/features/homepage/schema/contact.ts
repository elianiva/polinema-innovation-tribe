import { z } from "zod";

export const contactDetailSchema = z.object({
  name: z.string().min(1),
  suggestion: z.string().min(10),
});
export type ContactDetailSchema = z.infer<typeof contactDetailSchema>;