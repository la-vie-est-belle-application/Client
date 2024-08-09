import { APPLICANTS_ACTION_TYPE } from "@reducers/applicantsReducer";
import { User } from "./schedule";

export interface ApplicantsState {
  data: Applicants;
  dispatch: (action: ApplicantsAction) => void;
}

export interface Applicants {
  applied: User[] | [];
  pending: User[] | [];
  confirmed: User[] | [];
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
  payload: User[] | [];
}

export interface ApplicantsPendingAction {
  type: typeof APPLICANTS_ACTION_TYPE.PENDING;
  payload: User[] | [];
}

export interface ApplicantsConfirmedAction {
  type: typeof APPLICANTS_ACTION_TYPE.CONFIRMED;
  payload: User[] | [];
}

export interface ApplicantsReturnToAppliedAction {
  type: typeof APPLICANTS_ACTION_TYPE.RETURN_TO_APPLIED;
  payload: User[] | [];
}

export interface ApplicantsCancelAction {
  type: typeof APPLICANTS_ACTION_TYPE.CANCEL;
  payload: Applicants;
}

export interface ApplicantsUpdateAction {
  type: typeof APPLICANTS_ACTION_TYPE.UPDATE;
  payload: Applicants;
}
