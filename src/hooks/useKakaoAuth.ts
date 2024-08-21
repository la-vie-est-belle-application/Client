import { AUTH_API } from "@api/auth/siginIn";
import useAuthStore from "@stores/useAuthStore";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useKakaoAuth = () => {
  const [searchParams] = useSearchParams();
  const kakaoCodeParams = searchParams.get("code");
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!kakaoCodeParams) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await AUTH_API.signIn(kakaoCodeParams);
        const userData = response;
        sessionStorage.setItem("user", JSON.stringify(userData));
      } catch (e) {
        console.error(e);
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

  return { handleKakaoSignin, isLoggedIn };
};

export default useKakaoAuth;
