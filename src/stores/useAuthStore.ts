import { Auth } from "src/types/store";
import { create } from "zustand";

const useAuthStore = create<Auth>((set) => {
  return {
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  };
});

export default useAuthStore;
