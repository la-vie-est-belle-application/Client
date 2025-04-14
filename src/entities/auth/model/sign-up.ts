import { redirect } from "next/navigation";
import { createServer } from "@shared/supabase";

interface SignUpData {
  email: string;
  password: string;
  name: string;
  gender: string;
  phone: string;
}

export default async function handleSignUp(formData: FormData) {
  const supabase = await createServer();

  const data: SignUpData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
    gender: formData.get("gender") as string,
    phone: formData.get("phone") as string,
  };

  if (
    !data.email ||
    !data.password ||
    !data.name ||
    !data.gender ||
    !data.phone
  ) {
    throw new Error("모든 필드를 입력해주세요.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error("올바른 이메일 형식을 입력해주세요.");
  }

  if (data.password.length < 6) {
    throw new Error("비밀번호는 6자 이상이어야 합니다.");
  }

  const phoneRegex = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/;
  if (!phoneRegex.test(data.phone)) {
    throw new Error("올바른 휴대폰 번호를 입력해주세요.");
  }

  const { data: authData, error: signUpError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  if (signUpError) {
    console.error("회원가입 에러:", signUpError);
    throw new Error(signUpError.message);
  }

  if (authData.user) {
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: authData.user.id,
        name: data.name,
        gender: data.gender,
        phone: data.phone,
      },
    ]);

    if (profileError) {
      console.error("프로필 저장 에러:", profileError);
      throw new Error(profileError.message);
    }
  }

  redirect("/");
}
