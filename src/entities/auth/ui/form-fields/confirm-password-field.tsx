import { Control } from "react-hook-form";
import { UserSchema } from "../../model/types";
import { BaseField } from "./base-field";

interface ConfirmPasswordFieldProps {
  control: Control<UserSchema>;
}

export function ConfirmPasswordField({ control }: ConfirmPasswordFieldProps) {
  return (
    <BaseField
      control={control}
      name="confirmPassword"
      label="비밀번호 확인"
      placeholder="비밀번호를 다시 입력해주세요"
      type="password"
    />
  );
}
