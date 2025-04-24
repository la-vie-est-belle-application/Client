"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "@entities/auth/model/auth";
import { userSchema } from "@entities/auth/model/schema";
import { UserSchema } from "@entities/auth/model/types";

export default function useSignUp() {
  const form = useForm<UserSchema>({
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

  async function handleSubmit(values: UserSchema) {
    await auth.signUp(values);
  }

  return { form, handleSubmit };
}
