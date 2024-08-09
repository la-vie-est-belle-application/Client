import { http } from "msw";
import { getUserInfoResolver } from "./user/userResolver";
import { getApplicantsResolver } from "./applicants/applicantsResolver";

export const handlers = [
  http.get("/signin/:kakaoCode", getUserInfoResolver),
  http.get(
    `${import.meta.env.VITE_APPLICANTS_URL}?:activeMonth/:params`,
    getApplicantsResolver,
  ),
];
