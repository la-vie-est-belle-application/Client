import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SelectorHook } from "@shared/store/common-types";

interface DateStore {
  date: string;
  setDate: (date: string) => void;
}

const dateStore = create<DateStore>()(
  persist(
    (set) => ({
      date: "",
      setDate: (date) => set({ date: date }),
    }),
    {
      name: "date-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const useDateStore: SelectorHook<DateStore, "date"> = (
  selector = (state: DateStore) => state.date,
) => dateStore(selector);
