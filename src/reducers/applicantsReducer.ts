import { Applicants, ApplicantsAction } from "src/types/applicants";

export const APPLICANTS_ACTION_TYPE = {
  APPLIED: "APPLIED",
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  RETURN_TO_APPLIED: "RETURN_TO_APPLIED",
  CANCEL: "CANCEL",
  UPDATE: "UPDATE",
} as const;

export const INITIAL_APPLICANTS: Applicants = {
  applied: [],
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
      const userIdsToMove = new Set(action.payload.map((user) => user.kakaoId));
      const newApplied = state.applied.filter(
        (user) => !userIdsToMove.has(user.kakaoId),
      );
      const newConfirmed = state.confirmed.filter(
        (user) => !userIdsToMove.has(user.kakaoId),
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
      const userIdsToMove = new Set(action.payload.map((user) => user.kakaoId));
      const newPending = state.pending.filter(
        (user) => !userIdsToMove.has(user.kakaoId),
      );
      const newConfirmed = state.confirmed.filter(
        (user) => !userIdsToMove.has(user.kakaoId),
      );
      const newApplied = [...state.applied, ...action.payload];

      return {
        ...state,
        applied: newApplied,
        pending: newPending,
        confirmed: newConfirmed,
      };
    }
    case APPLICANTS_ACTION_TYPE.CANCEL:
    case APPLICANTS_ACTION_TYPE.UPDATE: {
      return action.payload;
    }
    default:
      return state;
  }
};
