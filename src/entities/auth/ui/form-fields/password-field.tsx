// src/entities/auth/ui/form-fields/password-field.tsx
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { BaseField } from "./base-field";
import { BaseFieldProps } from "@entities/auth/types";

export function PasswordField<T extends FieldValues>(props: BaseFieldProps<T>) {
  const [show, setShow] = useState(false);

  return (
    <BaseField
      {...props}
      type={show ? "text" : "password"}
      rightElement={
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setShow((v) => !v)}
          className="flex items-center justify-center h-full px-2 focus:outline-none cursor-pointer"
          aria-label={show ? "비밀번호 숨기기" : "비밀번호 보기"}
        >
          {show ? (
            <EyeIcon className="w-5 h-5 text-gray-400 block" />
          ) : (
            <EyeOffIcon className="w-5 h-5 text-gray-400 block" />
          )}
        </button>
      }
    />
  );
}
