import { createRef } from "react";
import FullCalendar from "@fullcalendar/react";
import { enableMapSet } from "immer";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ScheduleCalenderStore, SelectorHook } from "./types";

enableMapSet();

export const scheduleCalenderStore = create(
  immer<ScheduleCalenderStore>((set) => ({
    selectedDate: new Set<string>(),
    selectedDateList: [],
    calendarRef: createRef<FullCalendar | null>(),

    setSelectedDate: (date: string) =>
      set((state) => {
        if (state.selectedDate.has(date)) {
          state.selectedDate.delete(date);
        } else {
          state.selectedDate.add(date);
        }

        state.selectedDateList = Array.from(state.selectedDate);
      }),
    clearSelectedDate: () =>
      set((state) => {
        state.selectedDate.clear();
      }),
  })),
);

export const useScheduleCalenderStore: SelectorHook<
  ScheduleCalenderStore,
  "selectedDate"
> = (selector = (state: ScheduleCalenderStore) => state.selectedDate) =>
  scheduleCalenderStore(selector);
