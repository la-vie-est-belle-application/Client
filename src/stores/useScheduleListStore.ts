import { create } from "zustand";
import { scheduleListReducer } from "../reducers/scheduleListReducer";
import { ScheduleList, ScheduleListAction } from "src/types/schedule";
import { INITIAL_SCHEDULE_LIST } from "../reducers/scheduleListReducer";

export const useScheduleListStore = create<{
  scheduleList: ScheduleList;
  updateScheduleList: (action: ScheduleListAction) => void;
}>((set) => ({
  scheduleList: INITIAL_SCHEDULE_LIST,
  updateScheduleList: (action: ScheduleListAction) => {
    set((state) => ({
      scheduleList: scheduleListReducer(state.scheduleList, action),
    }));
  },
}));

export const useTemporaryScheduleListStore = create<{
  temporaryScheduleList: ScheduleList;
  updateTemporaryScheduleList: (action: ScheduleListAction) => void;
}>((set) => ({
  temporaryScheduleList: INITIAL_SCHEDULE_LIST,
  updateTemporaryScheduleList: (action: ScheduleListAction) => {
    set((state) => ({
      temporaryScheduleList: scheduleListReducer(
        state.temporaryScheduleList,
        action,
      ),
    }));
  },
}));
