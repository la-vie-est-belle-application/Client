import { User } from "src/types/schedule";
import { API, handleApiError } from "..";
import { env } from "@constants/url";

export const AUTH_API = {
  signIn: async (params: string) => {
    try {
      const response = await API.get<User>(`${env.signInURL}/${params}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },
};
