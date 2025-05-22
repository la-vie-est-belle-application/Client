import { describe, expect, it } from "vitest";
import { pipe } from "@shared/lib/compose";

describe("pipe 유틸 테스트", () => {
  const add1 = (x: number) => x + 1;
  const double = (x: number) => x * 2;

  it("함수 시퀀스를 순차적으로 적용하여 올바른 결과를 반환해야 한다", () => {
    const pipeline = pipe(add1, double);
    expect(pipeline(3)).toBe(8);
  });

  it("함수가 주어지지 않으면 초기값을 그대로 반환해야 한다", () => {
    const pipeline = pipe<number>();
    expect(pipeline(5)).toBe(5);
  });

  it("함수가 아닌 요소가 포함되면 TypeError를 던져야 한다", () => {
    // @ts-ignore: 런타임 오류 테스트를 위한 타입 무시
    const badPipeline = pipe(add1, undefined);
    expect(() => badPipeline(2)).toThrow(TypeError);
  });
});
