import { create } from "zustand";

type UserStore = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));
