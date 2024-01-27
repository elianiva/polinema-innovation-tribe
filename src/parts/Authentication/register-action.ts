"use server";

import { registerUser } from "~/services/user/register";
import { cookies } from "next/headers";
import type { RegistrationSchema } from "~/schema/registration";
import { redirect } from "next/navigation";

export async function handleUserRegistration(data: RegistrationSchema) {
  await registerUser(cookies(), data);
  redirect("/login");
}