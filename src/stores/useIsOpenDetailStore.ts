import { create } from "zustand";

const useIsOpenDetailStore = create<{
  isOpenDetail: boolean;
  updateIsOpenDetail: (state: boolean) => void;
}>((set) => ({
  isOpenDetail: false,
  updateIsOpenDetail: () =>
    set((state) => ({
      isOpenDetail: !state.isOpenDetail,
    })),
}));

export default useIsOpenDetailStore;
