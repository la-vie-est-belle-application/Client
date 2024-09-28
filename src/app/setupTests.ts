import "@testing-library/react";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./apiMockServer";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
