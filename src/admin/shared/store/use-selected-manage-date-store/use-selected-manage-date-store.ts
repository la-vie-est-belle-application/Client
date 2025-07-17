import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { SelectorHook } from "@admin/shared/store/common-types";

interface SelectedManageDateStore {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const selectedManageDateStore = create<SelectedManageDateStore>()(
  persist(
    (set) => ({
      selectedDate: "",
      setSelectedDate: (date) => set({ selectedDate: date }),
    }),
    {
      name: "date-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const useSelectedManageDateStore: SelectorHook<
  SelectedManageDateStore,
  "selectedDate"
> = (selector = (state: SelectedManageDateStore) => state.selectedDate) =>
  selectedManageDateStore(selector);
