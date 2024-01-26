"use server";

import { registerUser } from "~/services/user/register";
import { cookies } from "next/headers";
import type { RegistrationSchema } from "~/schema/registration";

export async function handleUserRegistration(data: RegistrationSchema) {
  await registerUser(cookies(), data);
}