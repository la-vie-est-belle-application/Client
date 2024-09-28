import { Button } from "@chakra-ui/react";
import { useKakaoAuth } from "@entities/login/hooks/useKakaoAuth";

export function LoginPage() {
  const { getKakaoUserData } = useKakaoAuth();
  return (
    <>
      <Button onClick={() => getKakaoUserData()}>카카오로 로그인하기</Button>
    </>
  );
}
