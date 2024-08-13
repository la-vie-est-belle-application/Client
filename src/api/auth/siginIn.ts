import { User } from "src/types/schedule";
import { API } from "..";
import { AxiosError } from "axios";

export const AUTH_API = {
  signIn: async (params: string) => {
    try {
      const response = await API.get<User>(
        `${import.meta.env.VITE_SIGN_IN_URL}/${params}`,
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response ? error.response.data : error.message);
      } else {
        throw new Error(String(error));
      }
    }
  },
};
