import { axiosInstance } from "@shared/api/baseApi";
import { env } from "@shared/constants/env";
import { User } from "@shared/types/user";

export const loginApi = {
  loginWithKakao: async () => {
    try {
      const response = await axiosInstance.get<User>(env.kakaoLoginUrl);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
