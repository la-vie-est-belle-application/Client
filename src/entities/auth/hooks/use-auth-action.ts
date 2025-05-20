"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction, signupAction } from "@entities/auth/api/service";
import { getErrorMessageKo } from "@entities/auth/lib/get-error-message-ko";
import { loginSchema, userSchema } from "@entities/auth/model/schema";

export type AuthProfile = z.infer<typeof userSchema>;
export type AuthCredentials = z.infer<typeof loginSchema>;

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
    console.log("로그인 시도:", data);
    const result = await loginAction(data);
    console.log(result);
    if (!result.success) {
      console.error("로그인 실패:", result.error);
      loginForm.setError("root.serverError", {
        type: "server",
        message: getErrorMessageKo(result.error?.code),
      });
    }
  };

  const handleSignup = async (data: AuthProfile) => {
    console.log("회원가입 시도:", data);
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
