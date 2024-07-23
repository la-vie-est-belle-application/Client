import { Role } from "@constants/role";
import { HOURS, MINUTES } from "@constants/time";
import { WorkTimeActionTypes } from "@reducers/workTimeReducer";

export type Roles = keyof typeof Role;

export interface ScheduleList {
  role: Partial<Record<Roles, SelectedUsers>>;
}

export type SelectedUsers = string[];

export type WorkTimeAction = {
  type: WorkTimeTypes;
  payload: WorkTimeTuple;
};

export type Hours = (typeof HOURS)[number];
export type Minutes = (typeof MINUTES)[number];

export type WorkTimeTuple = [Hours, Minutes];

export interface WorkTime {
  startTime: WorkTimeTuple;
  endTime: WorkTimeTuple;
  type: WorkTimeTypes;
}

export type WorkTimeTypes =
  (typeof WorkTimeActionTypes)[keyof typeof WorkTimeActionTypes];
