import { User } from "@interfaces/schedule";

export const APPLICANTS_ACTION_TYPE = {
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
} as const;

export type ApplicantsAction =
  | ApplicantAddUserAction
  | ApplicantsDeleteUserAction;

export interface ApplicantAddUserAction {
  type: typeof APPLICANTS_ACTION_TYPE.ADD_USER;
  payload: User[];
}

export interface ApplicantsDeleteUserAction {
  type: typeof APPLICANTS_ACTION_TYPE.DELETE_USER;
  payload: User[];
}

export const INITIAL_APPLICANTS: User[] = [
  { userId: "1", userName: "윤태관", gender: "male" },
  { userId: "2", userName: "안유정", gender: "female" },
  { userId: "3", userName: "전옥진", gender: "male" },
];

export const applicantsReducer = (
  data: User[],
  action: ApplicantsAction,
): User[] => {
  switch (action.type) {
    case APPLICANTS_ACTION_TYPE.ADD_USER: {
      return [...data, ...action.payload];
    }
    case APPLICANTS_ACTION_TYPE.DELETE_USER: {
      const userIdsToDelete = new Set(
        action.payload.map((user) => user.userId),
      );

      return data.filter((user) => !userIdsToDelete.has(user.userId));
    }
    default:
      return data;
  }
};
