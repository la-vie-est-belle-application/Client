"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction, signupAction } from "@entities/auth/api/service";
import { loginSchema, userSchema } from "@entities/auth/model/schema";

export type AuthProfile = z.infer<typeof userSchema>;
export type AuthCredentials = z.infer<typeof loginSchema>;

export default function useAuthAction() {
  const signUpForm = useForm<AuthProfile>({
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

  const handleSignUp = async (data: AuthProfile) => {
    return await signupAction(data);
  };

  const handleLogin: SubmitHandler<AuthCredentials> = async (
    data: AuthCredentials,
  ) => {
    const result = await loginAction(data);

    if (result?.error) {
      loginForm.setError("root.serverError", {
        type: "server",
        message: result.error,
      });
      return;
    }
  };

  return {
    signUpForm,
    loginForm,
    handleSignUp,
    handleLogin,
  };
}
