"use client";

import { useState } from "react";
import { handleAuthValidate } from "./auth-validate";

interface UseAuthInputProps {
  type: "email" | "password" | "passwordConfirm";
  required?: boolean;
  placeholder?: string;
}

interface AuthState {
  value: string;
  isValid: boolean;
  errorMessage: string;
}

export default function useAuthValidation({
  type,
  required = true,
  placeholder = "",
}: UseAuthInputProps) {
  const [state, setState] = useState<AuthState>({
    value: "",
    isValid: true,
    errorMessage: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    const result = handleAuthValidate({ type, value: newValue });

    setState({
      value: newValue,
      isValid: result?.success ?? true,
      errorMessage: result?.message ?? "",
    });
  };

  return {
    ...state,
    onChange,
    type,
    title: type,
    required,
    placeholder,
  };
}
