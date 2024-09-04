import { describe, it, expect } from "vitest";
import { render, renderHook } from "@testing-library/react";

import { useUserStore } from "../model/useUserStore";

import { MainPage } from "@pages/main";
import App from "../../../app/App";

describe("App에 유저가 첫 진입시 테스트", () => {
  it("사용자가 처음 접속시 로그인 상태가 아니여야합니다", () => {
    render(<MainPage />);

    const { result } = renderHook(() => useUserStore((state) => state.isLogin));

    expect(result.current).toEqual(false);
  });

  it("사용자가 처음 접속시 로그인 페이지로 이동합니다.", () => {
    render(<App />);

    const regex = /^\/login$/;

    expect(window.location.pathname).toMatch(regex);
  });
});
