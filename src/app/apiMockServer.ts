import { setupServer } from "msw/node";
import { handlers } from "./apiMock";

export const server = setupServer(...handlers);
