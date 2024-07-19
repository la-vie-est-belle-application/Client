import { Role } from "@constants/role";
import { HOURS, MINUTES } from "@constants/time";

export type Roles = keyof typeof Role;

export interface ScheduleList {
  role: Partial<Record<Roles, SelectedUsers>>;
}

export type SelectedUsers = string[];

type Hours = (typeof HOURS)[number];
type Minutes = (typeof MINUTES)[number];
export type WorkTimeTuple = [Hours, Minutes];
export interface WorkTime {
  startTime: WorkTimeTuple;
  endTime: WorkTimeTuple;
}

export enum WorkTimeType {
  START_TIME = "START_TIME",
  END_TIME = "END_TIME",
}
