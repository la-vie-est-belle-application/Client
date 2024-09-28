import { axiosInstance } from "@shared/api/axios";
import { User } from "@shared/types/user";

export const loginApi = {
  login: async (url: string): Promise<User> => {
    const res = await axiosInstance.get(url);
    return res.data;
  },
};
