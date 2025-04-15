"use client";

import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import {
  CantContainWhitespace,
  CantStartNumber,
  CompareWithValue,
  EmailPattern,
  LengthLimit,
  RequireRule,
} from "../consts/rules";
import { AuthInputType, ValidateRule } from "../types/type";
import { handleAuthValidate } from "./auth-validate";

interface Props {
  id: AuthInputType;
  type: string;
  placeholder: string;
  isRequired: boolean;
  compareTarget?: string;
}

const getValidationRules: Record<
  AuthInputType,
  (target?: string) => ValidateRule[]
> = {
  email: () => [
    RequireRule,
    CantContainWhitespace,
    CantStartNumber,
    EmailPattern,
  ],
  password: () => [RequireRule, CantContainWhitespace, LengthLimit(6, 18)],
  passwordConfirm: (password = "") => [RequireRule, CompareWithValue(password)],
};

export default function useAuthInputValidator({
  id,
  type,
  placeholder,
  isRequired,
  compareTarget,
}: Props) {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id === "passwordConfirm" && text) {
      validate(text);
    }
  }, [compareTarget]); // eslint-disable-line react-hooks/exhaustive-deps

  const validate = (value: string) => {
    const result = handleAuthValidate(
      value,
      id,
      getValidationRules,
      compareTarget,
    );
    setError(result && result.message);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    if (error) setError(null);
  };

  const onBlur = (_e: FocusEvent<HTMLInputElement>) => {
    validate(text);
  };

  return {
    id,
    text,
    type,
    placeholder,
    isRequired,
    isInValid: !!error,
    errorMessage: error ?? "",
    onChange,
    onBlur,
  };
}
