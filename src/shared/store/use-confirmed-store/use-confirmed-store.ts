import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SelectorHook } from "@shared/store/index";
import { ConfirmedStore } from "@shared/store/use-confirmed-store/types";

const confirmedStore = create<{
  isConfirmed: boolean;
  setIsConfirmed: (isConfirmed: boolean) => void;
}>()(
  persist(
    (set) => ({
      isConfirmed: false,
      setIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
    }),
    {
      name: "confirmed-store",
    },
  ),
);

export const useConfirmedStore: SelectorHook<ConfirmedStore, "isConfirmed"> = (
  selector = (state: ConfirmedStore) => state.isConfirmed,
) => confirmedStore(selector);
