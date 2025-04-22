import SignUpPage from "@/app/sign-up/page";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CompareWithValue, RequireRule } from "../consts/rules";

describe("회원가입 유효성 검사", () => {
  it("이메일 필드가 비어 있으면 에러 메시지를 출력한다", () => {
    render(<SignUpPage />);

    const emailInput = screen.getByPlaceholderText("이메일을 입력해주세요.");

    fireEvent.change(emailInput, { target: { value: " " } });
    fireEvent.blur(emailInput);

    expect(
      screen.getByText(new RegExp(RequireRule.message)),
    ).toBeInTheDocument();
  });

  it("비밀번호와 비밀번호 확인이 일치하지 않으면 에러 메시지를 출력한다", () => {
    render(<SignUpPage />);

    const passwordInput = screen.getByPlaceholderText(
      "비밀번호를 입력해주세요.",
    ) as HTMLInputElement;
    const passwordConfirmInput = screen.getByPlaceholderText(
      "비밀번호를 다시 입력해주세요.",
    ) as HTMLInputElement;

    fireEvent.change(passwordInput, {
      target: { value: "password123" },
    });
    fireEvent.change(passwordConfirmInput, {
      target: { value: "differentpass" },
    });

    fireEvent.blur(passwordConfirmInput);

    expect(
      screen.getByText(
        new RegExp(CompareWithValue(passwordInput.value).message),
      ),
    ).toBeInTheDocument();
  });

  it("에러가 있는 경우 회원가입 버튼은 비활성화된다", () => {
    render(<SignUpPage />);

    fireEvent.change(screen.getByPlaceholderText("이메일을 입력해주세요."), {
      target: { value: " " },
    });
    fireEvent.change(screen.getByPlaceholderText("비밀번호를 입력해주세요."), {
      target: { value: "123" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("비밀번호를 다시 입력해주세요."),
      {
        target: { value: "123" },
      },
    );

    fireEvent.blur(screen.getByPlaceholderText("이메일을 입력해주세요."));
    fireEvent.blur(screen.getByPlaceholderText("비밀번호를 입력해주세요."));
    fireEvent.blur(
      screen.getByPlaceholderText("비밀번호를 다시 입력해주세요."),
    );

    const submitButton = screen.getByRole("button", { name: "회원가입" });
    expect(submitButton).toBeDisabled();
  });

  it("모든 입력이 유효하면 회원가입 버튼이 활성화된다", () => {
    render(<SignUpPage />);

    fireEvent.change(screen.getByPlaceholderText("이메일을 입력해주세요."), {
      target: { value: "valid@email.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("비밀번호를 입력해주세요."), {
      target: { value: "securePass123" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("비밀번호를 다시 입력해주세요."),
      {
        target: { value: "securePass123" },
      },
    );

    const submitButton = screen.getByRole("button", { name: "회원가입" });
    expect(submitButton).not.toBeDisabled();
  });
});
