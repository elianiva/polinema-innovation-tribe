"use server";

import type { ContactDetailSchema } from "~/features/homepage/schema/contact";
import { sendSuggestion } from "~/features/homepage/services/send-suggestion";

export async function handleSendSuggestion(input: ContactDetailSchema) {
  await sendSuggestion(input);
}