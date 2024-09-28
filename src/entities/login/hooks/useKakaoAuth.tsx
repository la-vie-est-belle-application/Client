import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { useToast } from "@chakra-ui/react";

import { queryKeys } from "@shared/constants/queryKeys";
import { env } from "@shared/constants/env";

import { loginApi } from "../api";
import { useNavigate } from "react-router-dom";

export const useKakaoAuth = () => {
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const toast = useToast();

  const { data: kakaoUserData } = useQuery({
    queryKey: [queryKeys.auth],
    queryFn: () => loginApi.login(env.kakaoLoginUrl),
    enabled: enabled,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const handleKakaoLogin = () => {
    setEnabled(true);
  };

  const userData = queryClient.getQueryData([queryKeys.auth]);

  useEffect(() => {
    if (!userData) return;

    toast({
      title: "로그인 성공",
      status: "success",
    });

    navigate("/");
  }, [userData]);

  return { kakaoUserData, handleKakaoLogin };
};
