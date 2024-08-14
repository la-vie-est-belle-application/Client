import { initialWorkTime, workTimeReducer } from "@reducers/workTimeReducer";
import { WorkTime, WorkTimeAction } from "src/types/schedule";
import { create } from "zustand";

export const useWorkTimeStore = create<{
  workTime: WorkTime;
  updateWorkTime: (action: WorkTimeAction) => void;
}>((set) => ({
  workTime: initialWorkTime,
  updateWorkTime: (action: WorkTimeAction) =>
    set((state) => ({
      workTime: workTimeReducer(state.workTime, action),
    })),
}));
