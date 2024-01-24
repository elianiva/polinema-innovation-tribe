import type { definitions } from "~/types/generated-types";

export type UserQueryResult = Pick<definitions["profiles"], "id" | "bio" | "first_name" | "last_name" | "username" | "profile_image">
