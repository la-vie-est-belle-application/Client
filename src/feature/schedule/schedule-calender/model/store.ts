import { enableMapSet } from "immer";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ScheduleCalenderStore, SelectorHook } from "./types";

enableMapSet();

export const scheduleCalenderStore = create(
  immer<ScheduleCalenderStore>((set) => ({
    selectedDateList: new Set<string>(),

    setSelectedDateList: (date: string) =>
      set((state) => {
        if (state.selectedDateList.has(date)) {
          state.selectedDateList.delete(date);
        } else {
          state.selectedDateList.add(date);
        }
      }),
  })),
);

export const useScheduleCalenderStore: SelectorHook<
  ScheduleCalenderStore,
  "selectedDateList"
> = (selector = (state: ScheduleCalenderStore) => state.selectedDateList) =>
  scheduleCalenderStore(selector);
