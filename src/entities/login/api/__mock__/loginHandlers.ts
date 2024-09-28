import { http, HttpResponse } from "msw";

import { env } from "@shared/constants/env";
import { User } from "@shared/types/user";

const dummyData: User = {
  kakaoId: "akdjfkdnrq-1234",
  name: "윤태관",
  email: "tkyoun0421@naver.com",
  gender: "male",
  pay: 13000,
  roleType: true,
  confirm: true,
};

export const loginHandlers = [
  http.get(`${env.kakaoLoginUrl}`, () => {
    return HttpResponse.json(dummyData, { status: 200 });
  }),
];
