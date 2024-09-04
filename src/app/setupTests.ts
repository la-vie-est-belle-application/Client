import "@testing-library/react";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./apiMockWorker";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
