import { describe, expect, test } from "vitest";

test("1 - 1 = 0", () => {
  const expected = 0;

  const result = 1 - 1;

  expect(result).toEqual(expected);
});

describe("", () => {
  test("1 + 1 = 2", () => {
    const expected = 2;

    const result = 1 + 1;

    expect(result).toEqual(expected);
  });

  test("1 + 1 = 창문", () => {
    const expected = 2;

    const result = "창문";

    expect(result).toEqual(expected);
  });
});
