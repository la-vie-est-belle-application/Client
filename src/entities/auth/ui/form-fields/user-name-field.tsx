import { Control } from "react-hook-form";
import { UserSchema } from "../../model/types";
import { BaseField } from "./base-field";

interface UserNameFieldProps {
  control: Control<UserSchema>;
}

export function UserNameField({ control }: UserNameFieldProps) {
  return (
    <BaseField
      control={control}
      name="userName"
      label="이름"
      placeholder="홍길동"
    />
  );
}
