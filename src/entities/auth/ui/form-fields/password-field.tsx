import { Control, Path } from "react-hook-form";
import { usePathname } from "next/navigation";
import {
  AuthCredentials,
  AuthProfile,
} from "@entities/auth/hooks/use-auth-action";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";

interface PasswordFieldProps<T extends AuthProfile | AuthCredentials> {
  control: Control<T>;
  name: Path<T>;
}

export default function PasswordField<T extends AuthProfile | AuthCredentials>({
  control,
  name,
}: PasswordFieldProps<T>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <BaseField<T>
      control={control}
      name={name}
      label="비밀번호"
      placeholder="비밀번호를 입력해주세요."
      type="password"
      isSkipValidation={isLoginPage}
    />
  );
}
