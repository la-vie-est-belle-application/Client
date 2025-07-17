"use client";

import { Control } from "react-hook-form";
import { AuthProfile } from "@admin/entities/auth/hooks/use-auth-action";
import { BaseField } from "@admin/entities/auth/ui/form-fields/base-field";

interface UserNameFieldProps {
  control: Control<AuthProfile>;
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
