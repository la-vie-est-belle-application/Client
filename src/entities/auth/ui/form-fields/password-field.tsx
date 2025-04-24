"use client";

import { Control, useFormContext } from "react-hook-form";
import { UserSchema } from "@entities/auth/model/types";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";

interface PasswordFieldProps {
  control: Control<UserSchema>;
}

export function PasswordField({ control }: PasswordFieldProps) {
  const { trigger } = useFormContext<UserSchema>();

  return (
    <BaseField
      control={control}
      name="password"
      label="비밀번호"
      placeholder="영문, 숫자, 특수문자 포함"
      type="password"
      onChange={() => {
        trigger("confirmPassword");
      }}
    />
  );
}
