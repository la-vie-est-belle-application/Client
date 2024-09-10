import { create } from "zustand";

type UserStore = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean, token?: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  isLogin: !!sessionStorage.getItem("access_token"),

  setIsLogin: (isLogin, token) => {
    if (isLogin && token) {
      sessionStorage.setItem("access_token", token);
    } else {
      sessionStorage.removeItem("access_token");
    }
    set({ isLogin });
  },
}));
