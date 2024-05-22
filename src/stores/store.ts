import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ModalType = "" | "modal" | "menu" | "register" | "toggle";

interface Store {
  modalType: ModalType;
  setModalType: (state: ModalType) => void;
  isModal: boolean;
  setIsModal: (state: boolean) => void;
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      modalType: "",
      setModalType: (state: ModalType) => set({ modalType: state }),
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
