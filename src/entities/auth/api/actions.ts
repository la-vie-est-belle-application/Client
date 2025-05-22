"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AuthCredentials, AuthProfile } from "@entities/auth/types";
import { createServer } from "@entities/supabase";
import { withErrorHandling } from "@shared/lib/error-handling";
import { Result } from "@shared/types";

export const loginAction = async (
  data: AuthCredentials,
): Promise<Result<void>> => {
  const result = await withErrorHandling(
    async () => {
      const supabase = await createServer();
      const { error } = await supabase.auth.signInWithPassword({
        email: data.userEmail,
        password: data.password,
      });

      if (error) {
        throw error;
      }
    },
    (error) => {
      console.error("로그인 에러:", error);
    },
  );

  if (result.success) {
    revalidatePath("/", "layout");
    redirect("/");
  }

  return result;
};

export const signupAction = async (
  data: AuthProfile,
): Promise<Result<void>> => {
  console.log("회원가입 액션 실행:", data);
  const result = await withErrorHandling(
    async () => {
      const supabase = await createServer();

      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email: data.userEmail,
          password: data.password,
        },
      );

      if (signUpError) {
        console.error("회원가입 에러:", signUpError);
        throw signUpError;
      }

      const user = authData.user;
      if (!user) {
        throw new Error("회원 정보가 없습니다.");
      }

      const { error: insertError } = await supabase
        .from("user_profiles")
        .insert({
          id: user.id,
          user_name: data.userName,
          user_phone_number: data.userPhoneNumber,
          user_birth: data.userBirth,
        });

      if (insertError) {
        console.error("프로필 저장 에러:", insertError);
        throw insertError;
      }
    },
    (error) => {
      console.error("회원가입 에러:", error);
    },
  );

  if (result.success) {
    revalidatePath("/", "layout");
    redirect("/login");
  }

  return result;
};

export const signOutAction = async (): Promise<Result<void>> => {
  const result = await withErrorHandling(async () => {
    const supabase = await createServer();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Sign out error:", error);
      throw error;
    }
  });

  if (result.success) {
    revalidatePath("/", "layout");
    redirect("/login");
  }

  return result;
};

export async function emailDuplicateAction(email: string): Promise<boolean> {
  const supabase = await createServer();
  const { data } = await supabase
    .from("user_profiles")
    .select("user_email")
    .eq("user_email", email)
    .single();
  return !!data;
}
