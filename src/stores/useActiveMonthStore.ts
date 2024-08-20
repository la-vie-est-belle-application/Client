import { format } from "date-fns";
import { create } from "zustand";

interface ActiveMonthState {
  activeMonth: string;
  setActiveMonth: (activeMonth: string) => void;
}

export const useActiveMonthStore = create<ActiveMonthState>((set) => {
  const currentMonth = format(new Date(), "yyyyMM");

  return {
    activeMonth: currentMonth,
    setActiveMonth: (activeMonth) => set({ activeMonth }),
  };
});
