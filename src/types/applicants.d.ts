import { APPLICANTS_ACTION_TYPE } from "@reducers/applicantsReducer";
import { AppliedScheduleUser } from "./schedule";

export interface ApplicantsState {
  data: Applicants;
  dispatch: (action: ApplicantsAction) => void;
}

export interface Applicants {
  applied: AppliedScheduleUser[] | [];
  pending: AppliedScheduleUser[] | [];
  confirmed: AppliedScheduleUser[] | [];
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
