import { Auth } from "src/types/store";
import { create } from "zustand";

const useAuthStore = create<Auth>((set) => {
  const userSession = sessionStorage.getItem("user");
  const initialIsLoggedIn = !!userSession;

  return {
    isLoggedIn: initialIsLoggedIn,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  };
});

export default useAuthStore;
