import { describe, expect, it } from "vitest";
import { rest } from "@shared/lib/compose";

describe("rest 유틸 테스트", () => {
  const data = [1, "a", "b"];
  it("두 번째 인자까지를 제외한 나머지를 배열로 반환해야 한다", () => {
    expect(rest(data, 2)).toEqual(["b"]);
  });

  it("num 값이 falsy이면 기본적으로 인덱스 1부터 슬라이스해야 한다", () => {
    expect(rest(data)).toEqual(["a", "b"]);
  });
});
