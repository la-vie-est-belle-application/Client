import { Control } from "react-hook-form";
import { UserSchema } from "../../model/types";
import { BaseField } from "./base-field";

interface UserIdFieldProps {
  control: Control<UserSchema>;
}

export function UserIdField({ control }: UserIdFieldProps) {
  return (
    <BaseField
      control={control}
      name="userId"
      label="아이디"
      placeholder="영문 + 숫자"
    />
  );
}
