import { Control } from "react-hook-form";
import { UserSchema } from "@entities/auth/model/types";
import { BaseField } from "@entities/auth/ui";

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
