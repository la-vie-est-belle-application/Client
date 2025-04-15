interface AuthPayload {
  type: "email" | "password" | "passwordConfirm";
  value: string;
}

export function handleAuthValidate(payload: AuthPayload) {
  const { type, value } = payload;

  if (!value.trim()) {
    return {
      success: false,
      message: "필수 입력 요소입니다.",
    };
  }

  switch (type) {
    case "email":
      if (value.length > 1) {
        return {
          success: false,
          message: "이메일 길이가 한글자 이상임",
        };
      }
  }

  return {
    success: true,
    message: "",
  };
}
