import { baseApi } from "@shared/api/baseApi";
import { env } from "@shared/constants/env";

export const userApi = {
  login: async (params: string) => {
    try {
      const response = await baseApi.get(`${env.loginUrl}/${params}`);
      return response.data;
    } catch (error) {
      alert(error);
    }
  },
};
