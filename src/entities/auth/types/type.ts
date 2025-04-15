export interface ValidateRule {
  rule: RegExp;
  match: boolean;
  message: string;
}

export type AuthInputType = "email" | "password" | "passwordConfirm";
