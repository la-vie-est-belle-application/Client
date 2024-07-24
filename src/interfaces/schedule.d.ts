import { ROLES } from "@constants/role";
import { HOURS, MINUTES } from "@constants/time";
import { SCHEDULE_LIST_ACTION_TYPE } from "@reducers/scheduleListReducer";
import { WorkTimeActionTypes } from "@reducers/workTimeReducer";

export type Roles = keyof typeof ROLES;

export type ScheduleListAction = AddUserAction | DeleteUserAction;
export interface AddUserAction {
  type: typeof SCHEDULE_LIST_ACTION_TYPE.ADD_USER;
  payload: {
    role: Roles;
    userName: string;
    userId: string;
  };
}

export interface DeleteUserAction {
  type: typeof SCHEDULE_LIST_ACTION_TYPE.DELETE_USER;
  payload: {
    role: keyof typeof Role;
    userName: string;
    userId: string;
  };
}

export interface ScheduleList {
  role: {
    [key in Roles]: User[];
  };
}

export type SelectedUsers = User[];

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

export interface User {
  userId: string;
  userName: string;
  gender: "male" | "female";
}
