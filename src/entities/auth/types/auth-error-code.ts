import { errorMessagesKo } from "@entities/auth/consts/error-messages";

export type AuthErrorCode = keyof typeof errorMessagesKo;
