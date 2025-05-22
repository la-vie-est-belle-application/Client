"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction, signupAction } from "@entities/auth/api/actions";
import { loginSchema, userSchema } from "@entities/auth/model/schema";
import { AuthCredentials, AuthProfile } from "@entities/auth/types";
import { getErrorMessageKo } from "@shared/lib/get-error-message-ko";

export default function useAuthAction() {
  const signupForm = useForm<AuthProfile>({
    resolver: zodResolver(userSchema),
    mode: "onTouched",
    defaultValues: {
      userEmail: "",
      password: "",
      confirmPassword: "",
      userName: "",
      userPhoneNumber: "",
      userBirth: "",
    },
  });

  const loginForm = useForm<AuthCredentials>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userEmail: "",
      password: "",
    },
  });

  const handleLogin = async (data: AuthCredentials) => {
    const result = await loginAction(data);
    if (!result.success) {
      console.error("로그인 실패:", result.error);
      loginForm.setError("root.serverError", {
        type: "server",
        message: getErrorMessageKo(result.error?.code),
      });
    }
  };

  const handleSignup = async (data: AuthProfile) => {
    const result = await signupAction(data);
    if (!result.success) {
      console.error("회원가입 실패:", result.error);
      signupForm.setError("root.serverError", {
        type: "server",
        message: getErrorMessageKo(result.error?.code),
      });
    }
  };

  return {
    signupForm,
    loginForm,
    handleSignup,
    handleLogin,
  };
}
