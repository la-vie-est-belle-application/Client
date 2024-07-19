import { Role } from "@constants/role";

export type Roles = keyof typeof Role;

export interface ScheduleList {
  role: Partial<Record<Roles, SelectedUsers>>;
}

export type SelectedUsers = string[];

export type WorkTimeAction = {
  type: WorkTimeType;
  payload: WorkTimeTuple;
};

export type Hours = (typeof HOURS)[number];
export type Minutes = (typeof MINUTES)[number];

export type WorkTimeTuple = [Hours, Minutes];

export interface WorkTime {
  startTime: WorkTimeTuple;
  endTime: WorkTimeTuple;
}

export type WorkTimeType = (typeof WorkTimeTypes)[keyof typeof WorkTimeTypes];
