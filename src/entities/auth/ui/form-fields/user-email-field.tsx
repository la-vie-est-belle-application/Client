import { Control } from "react-hook-form";
import { UserSchema } from "../../model/types";
import { BaseField } from "./base-field";

interface UserIdFieldProps {
  control: Control<UserSchema>;
}

export function UserEmailField({ control }: UserIdFieldProps) {
  return (
    <BaseField
      control={control}
      name="userEmail"
      label="이메일"
      placeholder="이메일 입력"
    />
  );
}
