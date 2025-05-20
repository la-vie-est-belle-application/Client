import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@shared/shadcn-ui/components";
import { cn } from "@shared/shadcn-ui/lib/utils";

interface BaseFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSkipValidation?: boolean;
}

export function BaseField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  onChange,
}: BaseFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className="space-y-1 gap-0">
          <div className="flex items-center justify-between">
            <FormLabel className="text-sm leading-none font-medium text-gray-700">
              {label}
            </FormLabel>
          </div>
          <div className="relative">
            <FormControl>
              <Input
                {...field}
                placeholder={placeholder}
                type={type}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  onChange?.(e);
                }}
                className={cn(
                  "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 h-auto",
                  error ? "border-red-500" : null,
                )}
              />
            </FormControl>
            <FormMessage className="text-xs text-red-600 mt-1" />
          </div>
        </FormItem>
      )}
    />
  );
}
