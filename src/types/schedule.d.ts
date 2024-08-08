import { ROLES } from "@constants/role";
import { HOURS, MINUTES } from "@constants/time";
import { SCHEDULE_LIST_ACTION_TYPE } from "@reducers/scheduleListReducer";
import { WorkTimeActionTypes } from "@reducers/workTimeReducer";
import { SelectedDate } from "./calendar";

export type Roles = keyof typeof ROLES;
export type IsOpenDetail = boolean;
export type OnShowDetail = (date: SelectedDate) => void | null;
export interface ScheduleList {
  role: {
    [key in Roles]: User[];
  };
}
export type OnSelectRole = (role: Roles) => void;
export type OnUpdateWorkTime = React.Dispatch<WorkTimeAction>;
export interface WorkTime {
  startTime: WorkTimeTuple;
  endTime: WorkTimeTuple;
  type: WorkTimeTypes;
}
export type SelectedRole = Roles | undefined;
export type TemporaryScheduleList = ScheduleList;
export type AppliedScheduleUser = Pick<User, "kakaoId" | "name" | "gender">;
export type SetIsOpenDetail = React.Dispatch<React.SetStateAction<boolean>>;
export type ScheduleListAction =
  | AddUserAction
  | DeleteUserAction
  | CancelUserAction;
export type OnHandleNavigate = (date: SelectedDate) => void;
export type HandleAddToPendingList = (user: AppliedScheduleUser) => void;
export type HandleRemoveFromPendingList = (user: AppliedScheduleUser) => void;
export type HandleOnClose = (onClose: () => void) => void;
export interface AddUserAction {
  type: typeof SCHEDULE_LIST_ACTION_TYPE.ADD_USER;
  payload: {
    role: Roles;
    name: string;
    kakaoId: string;
  };
}

export interface DeleteUserAction {
  type: typeof SCHEDULE_LIST_ACTION_TYPE.DELETE_USER;
  payload: {
    role: keyof typeof ROLES;
    name: string;
    kakaoId: string;
  };
}

export interface CancelUserAction {
  type: typeof SCHEDULE_LIST_ACTION_TYPE.CANCEL;
  payload: ScheduleList;
}

export type SelectedUsers = User[];

export type WorkTimeAction = {
  type: WorkTimeTypes;
  payload: WorkTimeTuple;
};

export type Hours = (typeof HOURS)[number];
export type Minutes = (typeof MINUTES)[number];

export type WorkTimeTuple = [Hours, Minutes];

export type WorkTimeTypes =
  (typeof WorkTimeActionTypes)[keyof typeof WorkTimeActionTypes];

export interface User {
  kakaoId: string;
  name: string;
  email: string;
  gender: "male" | "female";
  pay: number;
  roleType: boolean;
  confirm: boolean;
}
