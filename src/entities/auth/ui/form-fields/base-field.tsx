import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/src/shared/shadcn-ui/components";
import { UserSchema } from "../../model/types";

interface BaseFieldProps {
  control: Control<UserSchema>;
  name: keyof Omit<UserSchema, "userBirth">;
  label: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BaseField({
  control,
  name,
  label,
  placeholder,
  type = "text",
  onChange,
}: BaseFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel className="block text-sm font-medium text-gray-700">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type}
              onChange={(e) => {
                field.onChange(e.target.value);
                onChange?.(e);
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </FormControl>
          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
}
