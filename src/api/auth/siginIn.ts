import { User } from "src/types/schedule";
import { API, handleApiError } from "..";

export const AUTH_API = {
  signIn: async (params: string) => {
    try {
      const response = await API.get<User>(
        `${import.meta.env.VITE_SIGN_IN_URL}/${params}`,
      );
      return response;
    } catch (error) {
      handleApiError(error);
    }
  },
};
