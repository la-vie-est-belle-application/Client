import { Control } from "react-hook-form";
import { UserSchema } from "../../model/types";
import { BaseField } from "./base-field";

interface UserBirthFieldProps {
  control: Control<UserSchema>;
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
