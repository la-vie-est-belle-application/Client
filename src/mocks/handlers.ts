import { http } from "msw";
import { getUserInfoResolver } from "./user/userResolver";

export const handlers = [http.get("/signin/:kakaoCode", getUserInfoResolver)];
