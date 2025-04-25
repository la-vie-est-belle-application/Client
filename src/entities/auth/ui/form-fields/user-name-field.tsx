import { Control } from "react-hook-form";
import { AuthProfile } from "@entities/auth/hooks/use-auth-action";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";

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
