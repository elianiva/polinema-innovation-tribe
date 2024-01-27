import { z } from "zod";

export const registrationSchema = z
  .object({
    email: z.string().min(1).email(),
    username: z.string().min(1),
    fullname: z.string().min(1),
    bio: z.string().optional(),
    profileImage: z.string().optional(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .superRefine((fields, ctx) => {
    if (fields.password !== fields.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password didn't match",
        path: ["confirmPassword"],
      });
    }
  });

export type RegistrationSchema = z.infer<typeof registrationSchema>;
