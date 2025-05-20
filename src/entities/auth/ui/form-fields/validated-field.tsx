import { Control, FieldValue, FieldValues, Path } from "react-hook-form";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";

interface ValidatedFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ValidatedField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  onChange,
}: ValidatedFieldProps<T>) {
  return (
    <BaseField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
}
