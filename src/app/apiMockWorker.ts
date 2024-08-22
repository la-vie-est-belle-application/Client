import { userHandlers } from "@entities/user";
import { setupWorker } from "msw/browser";

const handlers = [
  // @entities layer handlers
  ...userHandlers,
];

export const worker = setupWorker(...handlers);
