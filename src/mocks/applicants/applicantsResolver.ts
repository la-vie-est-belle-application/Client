import Applicants from "@datas/Applicants.json";
import { HttpResponse } from "msw";

export const getApplicantsResolver = () => {
  return HttpResponse.json(Applicants, { status: 200 });
};
