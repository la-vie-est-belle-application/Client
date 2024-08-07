import { AUTH_API } from "@api/auth/siginIn";
import useAuthStore from "@stores/useAuthStore";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useKakaoAuth = () => {
  const [searchParams] = useSearchParams();
  const kakaoCodeParams = searchParams.get("code");
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    if (!kakaoCodeParams) {
      return;
    }

    const fetchData = async () => {
      try {
        const { data } = await AUTH_API.signIn(kakaoCodeParams);
        const userData = data;

        sessionStorage.setItem("user", JSON.stringify(userData));
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [kakaoCodeParams]);

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    setIsLoggedIn(!!userSession);
  }, [isLoggedIn]);

  const handleKakaoSignin = () => {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const KAKAO_REQUEST_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = KAKAO_REQUEST_URL;
  };

  return { handleKakaoSignin, isLoggedIn };
};

export default useKakaoAuth;
