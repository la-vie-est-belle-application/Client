import { env } from "@constants/url";
import Applicants from "@datas/Applicants.json";
import { http, HttpResponse } from "msw";

export const getApplicantsHandler = http.get(
  `${env.applicantsURL}/:params`,
  () => {
    return HttpResponse.json(Applicants, { status: 200 });
  },
);
