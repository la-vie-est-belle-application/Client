import { useAuth } from "@entities/login/hooks/useAuth";

export function MainPage() {
  const userData = useAuth();
  return (
    <>
      <div>{userData?.name}</div>
    </>
  );
}
