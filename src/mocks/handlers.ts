import { getApplicantsHandler } from "./applicants";
import { createScheduleHandler, getScheduleHandler } from "./schedule";
import { getUserInfoHandler } from "./user";

export const handlers = [
  getUserInfoHandler,
  getApplicantsHandler,
  createScheduleHandler,
  getScheduleHandler,
];
