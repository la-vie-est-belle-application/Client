import { create } from "zustand";
import { SelectorHook } from "@shared/store/index";
import { ConfirmedStore } from "@shared/store/use-confirmed-store/types";

const confirmedStore = create<{
  isConfirmed: boolean;
  setIsConfirmed: (isConfirmed: boolean) => void;
}>((set) => ({
  isConfirmed: false,
  setIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
}));

export const useConfirmedStore: SelectorHook<ConfirmedStore, "isConfirmed"> = (
  selector = (state: ConfirmedStore) => state.isConfirmed,
) => confirmedStore(selector);
