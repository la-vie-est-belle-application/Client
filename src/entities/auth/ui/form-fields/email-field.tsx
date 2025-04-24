"use client";

import { Control, Path } from "react-hook-form";
import { usePathname } from "next/navigation";
import {
  AuthCredentials,
  AuthProfile,
} from "@entities/auth/hooks/use-auth-action";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";

export default function EmailField<T extends AuthProfile | AuthCredentials>({
  control,
  name,
}: {
  control: Control<T>;
  name: Path<T>;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <BaseField<T>
      control={control}
      name={name}
      label="이메일"
      placeholder="이메일을 입력해주세요."
      type="email"
      isSkipValidation={isLoginPage}
    />
  );
}
