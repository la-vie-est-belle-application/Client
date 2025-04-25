"use client";

import { Control, useFormContext } from "react-hook-form";
import { AuthProfile } from "@entities/auth/hooks/use-auth-action";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";

interface ConfirmPasswordFieldProps {
  control: Control<AuthProfile>;
}

export function ConfirmPasswordField({ control }: ConfirmPasswordFieldProps) {
  const { trigger } = useFormContext<AuthProfile>();

  return (
    <BaseField
      control={control}
      name="confirmPassword"
      label="비밀번호 확인"
      placeholder="비밀번호를 다시 입력해주세요"
      type="password"
      onChange={() => {
        trigger("confirmPassword");
      }}
    />
  );
}
