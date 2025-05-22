import { Control, FieldValues, Path } from "react-hook-form";
import { BaseFieldProps } from "@entities/auth/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@shared/shadcn-ui/components";
import { cn } from "@shared/shadcn-ui/lib/utils";

export function BaseField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  onChange,
  onFocus,
  rightElement,
  showMessage = true,
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
              <div className="relative">
                <Input
                  {...field}
                  placeholder={placeholder}
                  type={type}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    onChange?.(e);
                  }}
                  onFocus={onFocus}
                  className={cn(
                    "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 h-auto",
                    error ? "border-red-500" : null,
                  )}
                />
                {rightElement && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    {rightElement}
                  </div>
                )}
              </div>
            </FormControl>
            {showMessage && (
              <FormMessage className="text-xs text-red-600 mt-1" />
            )}
          </div>
        </FormItem>
      )}
    />
  );
}
