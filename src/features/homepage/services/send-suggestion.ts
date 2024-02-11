import type { ContactDetailSchema } from "~/features/homepage/schema/contact";

export async function sendSuggestion(data: ContactDetailSchema) {
  console.log({ data });
}