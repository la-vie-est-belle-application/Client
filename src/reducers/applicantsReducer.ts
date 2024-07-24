import { User } from "@interfaces/schedule";

// 액션 타입 정의
export const APPLICANTS_ACTION_TYPE = {
  PENDING: "PENDING",
  DONE: "DONE",
} as const;

// 액션 타입 정의
export type ApplicantsAction =
  | ApplicantAddUserAction
  | ApplicantsDeleteUserAction;

// 액션 인터페이스 정의
export interface ApplicantAddUserAction {
  status: typeof APPLICANTS_ACTION_TYPE.PENDING;
  payload: User[];
}

export interface ApplicantsDeleteUserAction {
  status: typeof APPLICANTS_ACTION_TYPE.DONE;
  payload: User[]; // 삭제할 유저 배열
}

// 초기 데이터 정의
export const INITIAL_APPLICANTS: User[] = [
  { userId: "1", userName: "윤태관", gender: "male" },
  { userId: "2", userName: "안유정", gender: "female" },
  { userId: "3", userName: "전옥진", gender: "male" },
];

// 리듀서 구현
export const applicantsReducer = (
  data: User[],
  action: ApplicantsAction,
): User[] => {
  switch (action.status) {
    case APPLICANTS_ACTION_TYPE.PENDING: {
      // 사용자 추가 로직
      return [...data, ...action.payload];
    }
    case APPLICANTS_ACTION_TYPE.DONE: {
      // 삭제할 유저의 userId 목록을 생성
      const userIdsToDelete = new Set(
        action.payload.map((user) => user.userId),
      );

      // userIdsToDelete에 포함되지 않는 사용자만 필터링
      return data.filter((user) => !userIdsToDelete.has(user.userId));
    }
    default:
      return data;
  }
};
