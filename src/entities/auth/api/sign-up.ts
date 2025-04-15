"use server";

import { redirect } from "next/navigation";
import { createServer } from "@shared/supabase";

interface SignUpResponse {
  success: boolean;
  message: string;
  field?: "email" | "password";
}

export default async function handleSignUp(
  formData: FormData,
): Promise<SignUpResponse> {
  const supabase = await createServer();

  const userData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error: signUpError } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (signUpError) {
    return {
      success: false,
      message: signUpError.message,
    };
  }

  redirect("/login");
}
