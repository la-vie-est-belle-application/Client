import { User } from "@interfaces/schedule";

export const APPLICANTS_ACTION_TYPE = {
  APPLIED: "APPLIED",
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  RETURN_TO_APPLIED: "RETURN_TO_APPLIED",
  CANCEL: "CANCEL",
  UPDATE: "UPDATE",
} as const;

export type ApplicantsAction =
  | ApplicantsAppliedAction
  | ApplicantsPendingAction
  | ApplicantsConfirmedAction
  | ApplicantsReturnToAppliedAction
  | ApplicantsCancelAction
  | ApplicantsUpdateAction;

export interface ApplicantsAppliedAction {
  type: typeof APPLICANTS_ACTION_TYPE.APPLIED;
  payload: User[];
}

export interface ApplicantsPendingAction {
  type: typeof APPLICANTS_ACTION_TYPE.PENDING;
  payload: User[];
}

export interface ApplicantsConfirmedAction {
  type: typeof APPLICANTS_ACTION_TYPE.CONFIRMED;
  payload: User[];
}

export interface ApplicantsReturnToAppliedAction {
  type: typeof APPLICANTS_ACTION_TYPE.RETURN_TO_APPLIED;
  payload: User[];
}

export interface ApplicantsCancelAction {
  type: typeof APPLICANTS_ACTION_TYPE.CANCEL;
  payload: Applicants;
}

export interface ApplicantsUpdateAction {
  type: typeof APPLICANTS_ACTION_TYPE.UPDATE;
  payload: Applicants;
}

export interface Applicants {
  applied: User[] | [];
  pending: User[] | [];
  confirmed: User[] | [];
}

export const INITIAL_APPLICANTS: Applicants = {
  applied: [
    { userId: "1", userName: "윤태관", gender: "male" },
    { userId: "2", userName: "안유정", gender: "female" },
    { userId: "3", userName: "전옥진", gender: "male" },
  ],
  pending: [],
  confirmed: [],
};

export const applicantsReducer = (
  state: Applicants,
  action: ApplicantsAction,
): Applicants => {
  switch (action.type) {
    case APPLICANTS_ACTION_TYPE.APPLIED: {
      const newApplied = [...state.applied, ...action.payload];
      return {
        ...state,
        applied: newApplied,
      };
    }
    case APPLICANTS_ACTION_TYPE.PENDING: {
      const userIdsToMove = new Set(action.payload.map((user) => user.userId));
      const newApplied = state.applied.filter(
        (user) => !userIdsToMove.has(user.userId),
      );
      const newConfirmed = state.confirmed.filter(
        (user) => !userIdsToMove.has(user.userId),
      );
      const newPending = [...state.pending, ...action.payload];

      return {
        ...state,
        applied: newApplied,
        confirmed: newConfirmed,
        pending: newPending,
      };
    }
    case APPLICANTS_ACTION_TYPE.CONFIRMED: {
      const newConfirmed = [...state.confirmed, ...action.payload];

      return {
        ...state,
        confirmed: newConfirmed,
      };
    }
    case APPLICANTS_ACTION_TYPE.RETURN_TO_APPLIED: {
      const userIdsToMove = new Set(action.payload.map((user) => user.userId));
      const newPending = state.pending.filter(
        (user) => !userIdsToMove.has(user.userId),
      );
      const newConfirmed = state.confirmed.filter(
        (user) => !userIdsToMove.has(user.userId),
      );
      const newApplied = [...state.applied, ...action.payload];

      return {
        ...state,
        applied: newApplied,
        pending: newPending,
        confirmed: newConfirmed,
      };
    }
    case APPLICANTS_ACTION_TYPE.CANCEL: {
      return action.payload;
    }
    case APPLICANTS_ACTION_TYPE.UPDATE: {
      return action.payload;
    }
    default:
      return state;
  }
};
