import { z } from "zod";
import { Control, FieldValues, Path } from "react-hook-form";
import { loginSchema, userSchema } from "@entities/auth/model/schema";
import { AUTH_ERROR_MESSAGE } from "@shared/consts/error-messages";

export type AuthErrorCode = keyof typeof AUTH_ERROR_MESSAGE;
export type AuthProfile = z.infer<typeof userSchema>;
export type AuthCredentials = z.infer<typeof loginSchema>;
export type CheckResult = "ok" | "exists" | null;
export interface BaseFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isSkipValidation?: boolean;
  rightElement?: React.ReactNode;
  showMessage?: boolean;
}
