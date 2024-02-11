"use server";

import { registerUser } from "~/features/authentication/services/register";
import { cookies } from "next/headers";
import type { RegistrationSchema } from "~/features/authentication/schema/registration";
import { redirect } from "next/navigation";

export async function handleUserRegistration(data: RegistrationSchema) {
  await registerUser(cookies(), data);
  redirect("/login");
}