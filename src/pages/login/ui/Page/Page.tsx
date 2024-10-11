import { Button } from "@chakra-ui/react";
import { useKakaoAuth } from "@entities/login/hooks/useKakaoAuth";

export const LoginPage = () => {
  const { handleKakaoLogin } = useKakaoAuth();
  return (
    <>
      <Button onClick={handleKakaoLogin}>카카오로 로그인하기</Button>
    </>
  );
};
