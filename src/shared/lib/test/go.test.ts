import { describe, expect, it } from "vitest";
import { go } from "@shared/lib";

describe("go 유틸 테스트", () => {
  const add1 = (x: number) => x + 1;
  const double = (x: number) => x * 2;

  it("초기값과 함수 체인을 즉시 실행하여 결과를 반환해야 한다", () => {
    expect(go(3, add1, double)).toBe(8);
  });

  it("함수가 주어지지 않으면 초기값을 그대로 반환해야 한다", () => {
    expect(go(10)).toBe(10);
  });

  it("함수가 아닌 요소가 포함되면 TypeError를 던져야 한다", () => {
    // @ts-ignore: 런타임 오류 테스트
    expect(() => go(2, add1, null)).toThrow(TypeError);
  });
});
