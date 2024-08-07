import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Store {
  isModal: boolean;
  setIsModal: (state: boolean) => void;
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      isModal: false,
      setIsModal: (state: boolean) => set({ isModal: state }),
    }),
    {
      name: "modal-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useStore;
