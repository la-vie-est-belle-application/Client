import { Control } from "react-hook-form";
import { AuthProfile } from "@entities/auth/hooks/use-auth-action";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";

interface PhoneNumberFieldProps {
  control: Control<AuthProfile>;
}

export function PhoneNumberField({ control }: PhoneNumberFieldProps) {
  return (
    <BaseField
      control={control}
      name="userPhoneNumber"
      label="전화번호"
      placeholder="01012345678"
    />
  );
}
