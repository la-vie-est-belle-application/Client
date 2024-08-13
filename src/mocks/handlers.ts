import { http } from "msw";
import { getUserInfoResolver } from "./user/userResolver";
import { getApplicantsResolver } from "./applicants/applicantsResolver";

export const handlers = [
  http.get(
    `${import.meta.env.VITE_SIGN_IN_URL}/:kakaoCode`,
    getUserInfoResolver,
  ),
  http.get(
    `${import.meta.env.VITE_APPLICANTS_URL}/:params`,
    getApplicantsResolver,
  ),
];
