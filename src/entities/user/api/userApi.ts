import { env } from "@shared/constants/env";
import axios from "axios";

const client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const grant_type = "authorization_code";

export const userApi = {
  getKakaoToken: async (code: string) => {
    try {
      const data = new URLSearchParams({
        grant_type,
        client_id,
        redirect_uri,
        code,
      });

      const res = await axios.post(env.kakaoLoginUrl, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });

      return res.data;
    } catch (e) {
      console.error(e);
      console.log("ddd");
    }
  },
};
