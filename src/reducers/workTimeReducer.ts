import { WorkTime, WorkTimeAction } from "@interfaces/schedule";

export const WorkTimeActionTypes = {
  START_TIME: "START_TIME",
  END_TIME: "END_TIME",
} as const;

export const initialWorkTime: WorkTime = {
  startTime: ["09", "00"],
  endTime: ["18", "00"],
};

export const workTimeReducer = (
  times: WorkTime,
  action: WorkTimeAction,
): WorkTime => {
  switch (action.type) {
    case WorkTimeActionTypes.START_TIME:
      return { ...times, startTime: action.payload };
    case WorkTimeActionTypes.END_TIME:
      return { ...times, endTime: action.payload };
    default:
      return times;
  }
};
