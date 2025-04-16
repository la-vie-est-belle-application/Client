import { ValidateRule } from "../types/type";

export const RequireRule: ValidateRule = {
  rule: /.+/,
  match: true,
  message: "필수 입력 항목입니다.",
};

export const CantContainWhitespace: ValidateRule = {
  rule: /\s/,
  match: false,
  message: "공백을 포함할 수 없습니다.",
};

export const CantStartNumber: ValidateRule = {
  rule: /^\d/,
  match: false,
  message: "숫자로 시작하는 이메일은 사용할 수 없습니다.",
};

export const EmailPattern: ValidateRule = {
  rule: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  match: true,
  message: "이메일 형식을 올바르게 입력해주세요.",
};

export const LengthLimit = (limit: number, maximum: number): ValidateRule => ({
  rule: new RegExp(`^.{${limit},${maximum}}$`),
  match: true,
  message: `최소 ${limit}글자 이상, 최대 ${maximum}글자 이하로 입력해주세요.`,
});

export const CompareWithValue = (targetValue: string): ValidateRule => ({
  rule: new RegExp(`^${targetValue}$`),
  match: true,
  message: "비밀번호가 일치하지 않습니다.",
});
