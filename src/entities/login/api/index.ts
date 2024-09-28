import { axiosInstance } from "@shared/api/axios";
import { env } from "@shared/constants/env";
import { User } from "@shared/types/user";

export const loginApi = {
  loginWithKakao: async (): Promise<User> => {
    const res = await axiosInstance.get(env.kakaoLoginUrl);
    return res.data;
  },
};
