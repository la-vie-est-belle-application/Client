import { http } from "msw";
import { getUserInfoResolver } from "./user/userResolver";
import { getApplicantsResolver } from "./applicants/applicantsResolver";
import { getScheduleResolver } from "./schedule/scheduleListResolver";
import { env } from "@constants/url";

export const handlers = [
  http.get(`${env.signInURL}/:kakaoCode`, getUserInfoResolver),
  http.get(`${env.applicantsURL}/:params`, getApplicantsResolver),
  http.get(`${env.scheduleURL}/:params`, ({ params }) => {
    getScheduleResolver(params);
  }),
];
