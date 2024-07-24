import { WorkTimeTuple } from "@interfaces/schedule";

export const formatTimeWithColon = (workTime: WorkTimeTuple) => {
  return workTime.map((num) => String(num).padStart(2, "0")).join(":");
};
