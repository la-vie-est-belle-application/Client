import { Button } from "@chakra-ui/react";
import { useAuth } from "@entities/login/hooks/useAuth";

export function MainPage() {
  const { user, handleLogout } = useAuth();
  return (
    <>
      <div>{user?.name}</div>
      <Button onClick={handleLogout}>로그아웃</Button>
    </>
  );
}
