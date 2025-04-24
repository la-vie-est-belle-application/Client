"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  AuthCredentials,
  AuthProfile,
} from "@entities/auth/hooks/use-auth-action";
import { createServer } from "@entities/supabase";

class AuthService {
  async loginAction(data: AuthCredentials) {
    const supabase = await createServer();
    const { userEmail: email, password } = data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { error: "로그인 정보가 유효하지 않습니다." };
    }

    revalidatePath("/", "layout");
    redirect("/");
  }

  async signupAction(data: AuthProfile) {
    const { userEmail, password, userName, userPhoneNumber, userBirth } = data;

    const supabase = await createServer();
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: userEmail,
        password,
      },
    );

    if (signUpError) {
      redirect("/error");
    }

    const user = signUpData.user;
    if (!user) {
      console.error("회원 정보가 없습니다.");
      redirect("/error");
    }

    const { error: insertError } = await supabase.from("user_profiles").insert({
      id: user.id,
      user_name: userName,
      user_phone_number: userPhoneNumber,
      user_birth: userBirth,
    });

    if (insertError) {
      console.error("프로필 삽입 에러:", insertError.message);
      redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/login");
  }
}

const authService = new AuthService();

export async function loginAction(data: AuthCredentials) {
  return authService.loginAction(data);
}

export async function signupAction(data: AuthProfile) {
  return authService.signupAction(data);
}
