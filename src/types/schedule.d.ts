import { ROLES } from "@constants/role";
import { HOURS, MINUTES } from "@constants/time";
import { APPLICANTS_ACTION_TYPE } from "@reducers/applicantsReducer";
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
export interface Applicants {
  applied: AppliedScheduleUser[] | [];
  pending: AppliedScheduleUser[] | [];
  confirmed: AppliedScheduleUser[] | [];
}
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

export type ApplicantsAction =
  | ApplicantsAppliedAction
  | ApplicantsPendingAction
  | ApplicantsConfirmedAction
  | ApplicantsReturnToAppliedAction
  | ApplicantsCancelAction
  | ApplicantsUpdateAction;

export interface ApplicantsAppliedAction {
  type: typeof APPLICANTS_ACTION_TYPE.APPLIED;
  payload: AppliedScheduleUser[];
}

export interface ApplicantsPendingAction {
  type: typeof APPLICANTS_ACTION_TYPE.PENDING;
  payload: AppliedScheduleUser[];
}

export interface ApplicantsConfirmedAction {
  type: typeof APPLICANTS_ACTION_TYPE.CONFIRMED;
  payload: AppliedScheduleUser[];
}

export interface ApplicantsReturnToAppliedAction {
  type: typeof APPLICANTS_ACTION_TYPE.RETURN_TO_APPLIED;
  payload: AppliedScheduleUser[];
}

export interface ApplicantsCancelAction {
  type: typeof APPLICANTS_ACTION_TYPE.CANCEL;
  payload: Applicants;
}

export interface ApplicantsUpdateAction {
  type: typeof APPLICANTS_ACTION_TYPE.UPDATE;
  payload: Applicants;
}
