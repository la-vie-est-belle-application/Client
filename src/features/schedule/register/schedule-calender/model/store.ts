import { enableMapSet } from "immer";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ScheduleCalenderStore, SelectorHook } from "./types";

enableMapSet();

export const scheduleCalenderStore = create(
  immer<ScheduleCalenderStore>((set) => ({
    selectedDate: new Set<string>(),
    selectedDateList: [],

    setSelectedDate: (date: string) =>
      set((state) => {
        if (state.selectedDate.has(date)) {
          state.selectedDate.delete(date);
        } else {
          state.selectedDate.add(date);
        }

        state.selectedDateList = Array.from(state.selectedDate);
      }),
  })),
);

export const useScheduleCalenderStore: SelectorHook<
  ScheduleCalenderStore,
  "selectedDate"
> = (selector = (state: ScheduleCalenderStore) => state.selectedDate) =>
  scheduleCalenderStore(selector);
