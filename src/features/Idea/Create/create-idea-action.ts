"use server";

import type { IdeaSchema } from "~/schema/idea";
import { redirect } from "next/navigation";
import { createIdea } from "~/services/idea/create-idea";
import { cookies } from "next/headers";

export async function handleCreateIdea(input: IdeaSchema) {
  await createIdea(cookies(), input);
  redirect("/idea")
}