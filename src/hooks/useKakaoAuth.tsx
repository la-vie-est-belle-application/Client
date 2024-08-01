import { api } from "@api/index";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { User } from "src/types/schedule";

const useKakaoAuth = () => {
  const [searchParams] = useSearchParams();
  const kakaoCodeParams = searchParams.get("code");
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    if (!kakaoCodeParams) return;

    const fetchData = async () => {
      try {
        const response = await api.get(`/signin/${kakaoCodeParams}`);
        const userData = response.data;
        setUserInfo(userData);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [kakaoCodeParams]);

  const handleKakaoSignin = () => {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const KAKAO_REQUEST_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = KAKAO_REQUEST_URL;
  };

  return { handleKakaoSignin, userInfo };
};

export default useKakaoAuth;
