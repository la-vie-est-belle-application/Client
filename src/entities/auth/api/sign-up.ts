"use server";

import { redirect } from "next/navigation";
import { createServer } from "@shared/supabase";

interface SignUpData {
  email: string;
  password: string;
}

interface SignUpResponse {
  success: boolean;
  message: string;
  filed?: "email" | "password" | "passwordConfirm";
}

export default async function handleSignUp(
  formData: FormData,
): Promise<SignUpResponse> {
  const supabase = await createServer();

  const userData: SignUpData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error: signUpError } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (signUpError) {
    throw new Error(signUpError.message);
  }

  redirect("/login");
}
