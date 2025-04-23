"use client";

import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/src/shared/shadcn-ui/components";
import { UserSchema } from "../model/types";

interface BirthDateSelectProps {
  control: Control<UserSchema>;
}

export function BirthDateSelect({ control }: BirthDateSelectProps) {
  return (
    <FormField
      control={control}
      name="userBirth"
      render={({ field }) => (
        <FormItem className="space-y-1">
          <div className="flex items-center justify-between">
            <FormLabel className="text-sm font-medium text-gray-700">
              생년월일
            </FormLabel>
            <FormMessage className="text-sm text-red-600" />
          </div>
          <FormControl>
            <Input
              placeholder="YYYYMMDD (예: 19930421)"
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={8}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
