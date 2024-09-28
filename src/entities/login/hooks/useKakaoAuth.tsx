import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { loginApi } from "../api";

export const useKakaoAuth = () => {
  const navigate = useNavigate();

  const { mutate: getKakaoUserData, data: kakaoUserData } = useMutation({
    mutationFn: loginApi.loginWithKakao,
    onSuccess: (data) => {
      sessionStorage.setItem("userData", JSON.stringify(data));
      navigate("/");
    },
  });

  return { getKakaoUserData, kakaoUserData };
};
