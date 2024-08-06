import { WorkTime, WorkTimeAction } from "src/types/schedule";

export const WorkTimeActionTypes = {
  START_TIME: "출근 시간",
  END_TIME: "퇴근 시간",
} as const;

export const initialWorkTime: WorkTime = {
  startTime: ["09", "00"],
  endTime: ["18", "00"],
  type: "출근 시간",
};

export const workTimeReducer = (
  times: WorkTime,
  action: WorkTimeAction,
): WorkTime => {
  switch (action.type) {
    case WorkTimeActionTypes.START_TIME:
      return { ...times, startTime: action.payload, type: action.type };
    case WorkTimeActionTypes.END_TIME:
      return { ...times, endTime: action.payload, type: action.type };
    default:
      return times;
  }
};
