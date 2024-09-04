import { http, HttpResponse } from "msw";

import { env } from "@shared/constants/env";

export const userHandlers = [
  http.get(`${env.loginUrl}/:params`, () => {
    return HttpResponse.json(User, { status: 200 });
  }),
];
