export enum SignUpInputField {
  "email",
  "password",
  "passwordConfirm",
}

export interface AuthErrorMessage {
  email: {
    emailAddressInvalid: "사용된 이메일 도메인은 현재 지원되지 않습니다. 다른 이메일 주소를 사용하세요.";
    emailExists: "중복된 이메일입니다.";
  };
  password: {
    weakPassword: "비밀번호는 최소 8자 이상이며, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.";
  };
}
