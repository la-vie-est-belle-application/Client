import { http, HttpResponse } from "msw";

import { env } from "@shared/constants/env";
import { User } from "@shared/types/user";

const userDummyData: User = {
  kakaoId: "akdjfkdnrq-1234",
  name: "윤태관",
  email: "tkyoun0421@naver.com",
  gender: "male",
  pay: 13000,
  roleType: true,
  confirm: true,
};

export const userHandlers = [
  http.get(`${env.loginUrl}/:params`, () => {
    return HttpResponse.json(userDummyData, { status: 200 });
  }),
];
