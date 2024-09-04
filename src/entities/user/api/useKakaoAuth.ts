import { useQuery } from "@tanstack/react-query";
import { userApi } from "./userApi";

export function useKakaoAuth(params: string) {
  return useQuery({
    queryKey: ["auth"],
    queryFn: () => userApi.login(params),
  });
}
