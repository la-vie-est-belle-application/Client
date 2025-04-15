"use client";

import {
  ChangeEvent,
  FocusEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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

interface InputState {
  value: string;
  error: string | null;
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
  const [inputState, setInputState] = useState<InputState>({
    value: "",
    error: null,
  });

  const valueRef = useRef("");

  useEffect(() => {
    valueRef.current = inputState.value;
  }, [inputState.value]);

  const validate = useCallback(
    (value: string) => {
      const result = handleAuthValidate(
        value,
        id,
        getValidationRules,
        compareTarget,
      );

      return result ? result.message : null;
    },
    [id, compareTarget],
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputState((prev) => ({
      value,
      error: null,
    }));
  }, []);

  const onBlur = useCallback(
    (_e: FocusEvent<HTMLInputElement>) => {
      const errorMessage = validate(valueRef.current);
      setInputState((prev) => ({
        ...prev,
        error: errorMessage,
      }));
    },
    [validate],
  );

  useEffect(() => {
    if (id === "passwordConfirm" && valueRef.current) {
      const errorMessage = validate(valueRef.current);
      setInputState((prev) => ({
        ...prev,
        error: errorMessage,
      }));
    }
  }, [compareTarget, id, validate]);

  return {
    id,
    text: inputState.value,
    type,
    placeholder,
    isRequired,
    isInValid: !!inputState.error,
    errorMessage: inputState.error ?? "",
    onChange,
    onBlur,
  };
}
