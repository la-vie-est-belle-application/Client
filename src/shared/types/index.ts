import { AUTH_ERROR_MESSAGE } from "@shared/consts/error-messages";

export type ErrorType = {
  message: string;
  code?: string;
  status?: number;
};

export type Result<T> = {
  success: boolean;
  data?: T;
  error?: ErrorType;
};

export type ErrorMessagesKoWithIndex = typeof AUTH_ERROR_MESSAGE & {
  [key: string]: string | undefined;
};
