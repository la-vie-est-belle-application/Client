import { describe, expect, it } from "vitest";
import { userSchema } from "../model/schema";

const validUserData = {
  userEmail: "testuser@example.com",
  password: "Test123!@#",
  confirmPassword: "Test123!@#",
  userName: "홍길동",
  userPhoneNumber: "01012345678",
  userBirth: "19930421",
};

describe("회원가입 스키마 유효성 검사", () => {
  describe("아이디 유효성 검사", () => {
    it("올바른 이메일 형식이면 유효성 검사를 통과한다", () => {
      const result = userSchema.safeParse(validUserData);
      expect(result.success).toBe(true);
    });

    it("이메일이 비어있으면 에러를 반환한다", () => {
      const result = userSchema.safeParse({
        ...validUserData,
        userEmail: "",
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("이메일을 입력해주세요");
      }
    });

    it("이메일 형식이 올바르지 않으면 에러를 반환한다", () => {
      const result = userSchema.safeParse({
        ...validUserData,
        userEmail: "invalid-email",
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe(
          "올바른 이메일 형식이 아닙니다",
        );
      }
    });
  });
});

describe("비밀번호 유효성 검사", () => {
  it("올바른 비밀번호 형식이면 유효성 검사를 통과한다", () => {
    const result = userSchema.safeParse(validUserData);
    expect(result.success).toBe(true);
  });

  it("비밀번호가 8자 미만이면 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      password: "Aa1!",
      confirmPassword: "Aa1!",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      );
    }
  });

  it("비밀번호가 20자를 초과하면 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      password: "Testtest123!@#$%^&*()12",
      confirmPassword: "Testtest123!@#$%^&*()12",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      );
    }
  });

  it("비밀번호에 특수문자가 없으면 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      password: "Testtest123",
      confirmPassword: "Testtest123",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      );
    }
  });

  it("비밀번호와 확인 비밀번호가 일치하지 않으면 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      confirmPassword: "DifferentPass123!@#",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "비밀번호와 일치하지 않습니다.",
      );
    }
  });
});

describe("이름 유효성 검사", () => {
  it("올바른 한글 이름이면 유효성 검사를 통과한다", () => {
    const result = userSchema.safeParse(validUserData);
    expect(result.success).toBe(true);
  });

  it("이름이 비어있으면 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userName: "",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe("이름을 입력해주세요");
    }
  });

  it("이름에 한글이 아닌 문자가 포함되면 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userName: "Hong길동",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "올바른 한글 이름을 입력해주세요",
      );
    }
  });
});

describe("전화번호 유효성 검사", () => {
  it("올바른 전화번호 형식이면 유효성 검사를 통과한다", () => {
    const result = userSchema.safeParse(validUserData);
    expect(result.success).toBe(true);
  });

  it("010으로 시작하지 않는 전화번호는 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userPhoneNumber: "01112345678",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "[ - ] 없이 010으로 시작하는 11자리 숫자여야 합니다 ",
      );
    }
  });

  it("11자리가 아닌 전화번호는 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userPhoneNumber: "0101234567",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "[ - ] 없이 010으로 시작하는 11자리 숫자여야 합니다 ",
      );
    }
  });

  it("하이픈이 포함된 전화번호는 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userPhoneNumber: "010-1234-5678",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "[ - ] 없이 010으로 시작하는 11자리 숫자여야 합니다 ",
      );
    }
  });
});

describe("생년월일 유효성 검사", () => {
  it("올바른 형식의 생년월일을 입력하면 유효성 검사를 통과한다", () => {
    const result = userSchema.safeParse(validUserData);
    expect(result.success).toBe(true);
  });

  it("8자리가 아닌 생년월일은 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userBirth: "1993042",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "YYYYMMDD 형식으로 입력해주세요",
      );
    }
  });

  it("존재하지 않는 날짜는 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userBirth: "19930431",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe("올바른 날짜를 입력해주세요");
    }
  });

  it("올바르지 않은 월을 입력하면 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userBirth: "19931321",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe("올바른 날짜를 입력해주세요");
    }
  });

  it("숫자가 아닌 문자가 포함되면 에러를 반환한다", () => {
    const result = userSchema.safeParse({
      ...validUserData,
      userBirth: "1993042a",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "YYYYMMDD 형식으로 입력해주세요",
      );
    }
  });
});
