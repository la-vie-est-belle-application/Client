import { useUser } from "@entities/user/model/useUser";

export function LoginPage() {
  const { handleKakaoLogin } = useUser();

  return (
    <div>
      <button onClick={() => handleKakaoLogin()}>카카오로 로그인하기</button>
    </div>
  );
}
