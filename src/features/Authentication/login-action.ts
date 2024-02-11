"use server";

import type { AuthSchema } from "~/schema/auth";
import { loginWithCredentials } from "~/services/user/login";
import { cookies } from "next/headers";

export async function handleLoginWithCredentials(input: AuthSchema) {
  await loginWithCredentials(cookies(), input);
}