import { setupWorker } from "msw/browser";
import { handlers } from "./apiMock";

export const worker = setupWorker(...handlers);
