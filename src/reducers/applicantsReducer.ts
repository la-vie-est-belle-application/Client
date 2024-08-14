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
  applicants: Applicants,
  action: ApplicantsAction,
): Applicants => {
  const { type, payload } = action;
  switch (type) {
    case APPLICANTS_ACTION_TYPE.APPLIED: {
      const newApplied = [...applicants.applied, ...payload];
      return {
        ...applicants,
        applied: newApplied,
      };
    }
    case APPLICANTS_ACTION_TYPE.PENDING: {
      const userIdsToMove = new Set(payload.map((user) => user.kakaoId));
      const newApplied = applicants.applied.filter(
        (user) => !userIdsToMove.has(user.kakaoId),
      );
      const newConfirmed = applicants.confirmed.filter(
        (user) => !userIdsToMove.has(user.kakaoId),
      );
      const newPending = [...applicants.pending, ...payload];

      return {
        ...applicants,
        applied: newApplied,
        confirmed: newConfirmed,
        pending: newPending,
      };
    }
    case APPLICANTS_ACTION_TYPE.CONFIRMED: {
      const newConfirmed = [...applicants.confirmed, ...payload];

      return {
        ...applicants,
        confirmed: newConfirmed,
      };
    }
    case APPLICANTS_ACTION_TYPE.RETURN_TO_APPLIED: {
      const userIdsToMove = new Set(payload.map((user) => user.kakaoId));
      const newPending = applicants.pending.filter(
        (user) => !userIdsToMove.has(user.kakaoId),
      );
      const newConfirmed = applicants.confirmed.filter(
        (user) => !userIdsToMove.has(user.kakaoId),
      );
      const newApplied = [...applicants.applied, ...payload];

      return {
        ...applicants,
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
      return applicants;
  }
};
