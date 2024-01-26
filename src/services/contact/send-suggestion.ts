import type { ContactDetailSchema } from "~/schema/contact";

export async function sendSuggestion(data: ContactDetailSchema) {
  console.log({ data });
}