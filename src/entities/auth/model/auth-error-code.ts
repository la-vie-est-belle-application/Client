import { AUTH_ERROR_MESSAGE } from "@entities/auth/consts/error-messages";

export type AuthErrorCode = keyof typeof AUTH_ERROR_MESSAGE;
