import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userApi } from "../api/userApi";
import { useUserStore } from "./useUserStore";

const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

export function useUser() {
  const query = useLocation().search;
  const code = new URLSearchParams(query).get("code");
  const navigate = useNavigate();

  const { setIsLogin } = useUserStore();

  useEffect(() => {
    console.log("code : ", code);
  }, [code]);

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  useEffect(() => {
    if (!code) return;

    const fetchData = async () => {
      try {
        const res = await userApi.getKakaoToken(code);
        const { access_token } = res;
        sessionStorage.setItem("access_token", access_token);
        setIsLogin(true, access_token);

        navigate("/");
      } catch (error) {
        console.error("Error fetching token: ", error);
      }
    };

    fetchData();
  }, [code, setIsLogin, navigate]);

  return {
    handleKakaoLogin,
  };
}
