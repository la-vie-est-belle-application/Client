// import { describe, it, expect } from "vitest";
// import { render, renderHook } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { screen } from "@testing-library/dom";
// import { useLoginStore } from "../model/useLoginStore";

// import { MainPage } from "@pages/main";
// import { LoginPage } from "@pages/login";

// import App from "../../../app/App";

// describe("App에 유저가 첫 진입시 테스트", () => {
//   it("사용자가 처음 접속시 로그인 상태가 아니여야합니다", () => {
//     render(<MainPage />);

//     const { result } = renderHook(() =>
//       useLoginStore((state) => state.isLogin),
//     );

//     expect(result.current).toEqual(false);
//   });

//   it("사용자가 처음 접속시 로그인 페이지로 이동합니다.", () => {
//     render(<App />);

//     const regex = /^\/login$/;

//     expect(window.location.pathname).toMatch(regex);
//   });
//   it("카카오로 로그인하기 버튼을 누르면 서버로부터 유저 정보를 받아온다.", async () => {
//     render(<LoginPage />);

//     const kakaoLoginBtn = screen.findAllByTestId("kakao-login-btn");

//     expect(kakaoLoginBtn).toHaveLength(1);
//   });
// });
