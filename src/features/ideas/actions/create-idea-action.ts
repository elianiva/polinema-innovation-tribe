"use server";

import type { IdeaSchema } from "~/features/ideas/schema/idea";
import { redirect } from "next/navigation";
import { createIdea } from "~/features/ideas/services/create-idea";
import { cookies } from "next/headers";

export async function handleCreateIdea(input: IdeaSchema) {
  await createIdea(cookies(), input);
  redirect("/idea")
}