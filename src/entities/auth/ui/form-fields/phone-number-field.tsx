import { Control } from "react-hook-form";
import { UserSchema } from "../../model/types";
import { BaseField } from "./base-field";

interface PhoneNumberFieldProps {
  control: Control<UserSchema>;
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
