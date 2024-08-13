import { create } from "zustand";

const useIsOpenDetailStore = create<{
  isOpenDetail: boolean;
  updateIsOpenDetail: (state: boolean) => void;
}>((set) => ({
  isOpenDetail: false,
  updateIsOpenDetail: (state: boolean) => set({ isOpenDetail: state }),
}));

export default useIsOpenDetailStore;
