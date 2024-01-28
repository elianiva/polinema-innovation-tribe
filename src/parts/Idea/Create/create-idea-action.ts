"use server";

import type { IdeaSchema } from "~/schema/idea";
import { cookies } from "next/headers";
import { createIdea } from "~/services/idea/create-idea";
import { redirect } from "next/navigation";

export async function handleCreateIdea(input: IdeaSchema) {
  await createIdea(cookies(), input);
  redirect("/idea")
}