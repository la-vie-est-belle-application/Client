import { describe, test, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useUserStore } from "../model/useUserStore";

describe("user", () => {
  test("사용자가 처음 접속시 로그인 상태가 아니여야합니다", () => {
    const { result } = renderHook(() => useUserStore((state) => state.isLogin));

    expect(result.current).toEqual(false);
  });
});
