"use server";

import { redirect } from "next/navigation";
import { createServer } from "@shared/supabase";

export default async function handleLogin(formData: FormData) {
  const supabase = await createServer();

  const userData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(userData);

  if (error) {
    throw new Error("로그인 정보가 정확하지 않습니다.");
  }

  redirect("/");
}
