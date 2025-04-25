import { Control } from "react-hook-form";
import { AuthProfile } from "@entities/auth/hooks/use-auth-action";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";

interface UserBirthFieldProps {
  control: Control<AuthProfile>;
}

export function UserBirthField({ control }: UserBirthFieldProps) {
  return (
    <BaseField
      control={control}
      name="userBirth"
      label="생년월일"
      type="text"
      placeholder="YYYYMMDD (예: 19930421)"
    />
  );
}
