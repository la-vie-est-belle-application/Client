import { http, HttpResponse } from "msw";

import User from "@datas/User.json";
import { env } from "@constants/url";

export const getUserInfoHandler = http.get(
  `${env.signInURL}/:kakaoCode`,
  () => {
    return HttpResponse.json(User, { status: 200 });
  },
);
