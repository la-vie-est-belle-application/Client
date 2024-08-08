import { User } from "src/types/schedule";
import { API } from "..";

export const AUTH_API = {
  signIn: (params: string) =>
    API.get<User>(import.meta.env.VITE_SIGN_IN_URL, { params }),
};
