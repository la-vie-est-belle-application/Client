"use server";

import { createServer } from "@shared/supabase";

export default async function handleLogin(formData: FormData) {
  const supabase = await createServer();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
  }

  console.log(data);
}
