import { Button } from "@chakra-ui/react";
import { useLogin } from "@entities/login/model/useLogin";

export function LoginPage() {
  const { handleKakaoLogin } = useLogin();

  return (
    <>
      <Button onClick={handleKakaoLogin}>카카오로 로그인하기</Button>
    </>
  );
}
