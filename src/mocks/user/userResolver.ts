import { HttpResponse } from "msw";

import User from "@datas/User.json";

export const getUserInfoResolver = () => {
  return HttpResponse.json(User, { status: 200 });
};
