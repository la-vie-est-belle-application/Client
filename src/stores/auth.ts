import { create } from "zustand";

interface Auth {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLogin: boolean) => void;
}

const useAuthStore = create<Auth>((set) => {
  const initializeAuthState = () => {
    const userSession = sessionStorage.getItem("user");
    const isLoggedIn = !!userSession;
    set({ isLoggedIn });
  };

  initializeAuthState();

  return {
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  };
});

export default useAuthStore;
