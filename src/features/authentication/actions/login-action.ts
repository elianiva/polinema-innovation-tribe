"use server";

import type { AuthSchema } from "~/features/authentication/schema/auth";
import { loginWithCredentials } from "~/features/authentication/services/login";
import { cookies } from "next/headers";

export async function handleLoginWithCredentials(input: AuthSchema) {
  await loginWithCredentials(cookies(), input);
}