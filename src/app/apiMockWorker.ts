import { userHandlers } from "@entities/user";
import { setupServer } from "msw/node";

const handlers = [
  // @entities layer handlers
  ...userHandlers,
];

export const server = setupServer(...handlers);
