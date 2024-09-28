import { queryKeys } from "@shared/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { loginApi } from "../api/loginApi";

export const useKakaoAuth = () => {
  const { data: userKakaoData } = useQuery({
    queryKey: [queryKeys.kakaoAuth],
    queryFn: loginApi.loginWithKakao,
  });

  return userKakaoData;
};
