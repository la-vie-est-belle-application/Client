import { Button } from "@chakra-ui/react";
import { useAuth } from "@entities/login/hooks/useAuth";

export const Page = () => {
  const { user, handleLogout } = useAuth();
  return (
    <>
      <div>{user?.name}</div>
      <Button onClick={handleLogout}>로그아웃</Button>
    </>
  );
};
