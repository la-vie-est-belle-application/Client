import { useEffect } from "react";

import { useToast } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@shared/constants/queryKeys";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const userData = queryClient.getQueryData([queryKeys.auth]);
  const sessionData = sessionStorage.getItem("userData");

  const toast = useToast();

  const handleLogout = () => {
    queryClient.removeQueries({ queryKey: [queryKeys.auth] });
    toast({
      title: "로그아웃 성공",
      status: "success",
    });
  };

  useEffect(() => {
    const stringifyUserData = JSON.stringify(userData);
    userData
      ? sessionStorage.setItem("userData", stringifyUserData)
      : sessionStorage.removeItem("userData");
  }, [userData]);

  return { userData, handleLogout };
};
