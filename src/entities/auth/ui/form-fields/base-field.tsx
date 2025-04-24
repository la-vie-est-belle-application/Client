import { Control, FieldValues, Path } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
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
  isSkipValidation = false,
}: BaseFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error, isDirty } }) => (
        <FormItem className="space-y-1">
          <div className="flex items-center justify-between">
            <FormLabel className="text-sm font-medium text-gray-700">
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
                  "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pr-8",
                  error
                    ? "border-red-500"
                    : !isSkipValidation && isDirty && !error
                      ? "border-[#0064FF]"
                      : "",
                )}
              />
            </FormControl>
            <FormMessage className="text-xs text-red-600 mt-1" />
            {!isSkipValidation && isDirty && !error && (
              <CheckCircle2
                className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[#0064FF]"
                aria-hidden="true"
              />
            )}
          </div>
        </FormItem>
      )}
    />
  );
}
