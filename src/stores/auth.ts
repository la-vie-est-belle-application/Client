import { create } from "zustand";

interface Auth {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLogin: boolean) => void;
}

const useAuthStore = create<Auth>(
  (set): Auth => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  }),
);

export default useAuthStore;