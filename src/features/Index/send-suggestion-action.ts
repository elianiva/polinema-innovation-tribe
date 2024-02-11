"use server";

import type { ContactDetailSchema } from "~/schema/contact";
import { sendSuggestion } from "~/services/contact/send-suggestion";

export async function handleSendSuggestion(input: ContactDetailSchema) {
  await sendSuggestion(input);
}