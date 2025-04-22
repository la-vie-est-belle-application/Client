import { supabase } from "@/src/shared/config/supabase";

export default async function SignUpPage() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Supabase 연결 실패 ❌:", error.message);
  } else {
    console.log("Supabase 연결 성공 ✅:", data);
  }

  return <div>page</div>;
}
