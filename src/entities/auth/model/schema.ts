import { z } from "zod";

export const userSchema = z
  .object({
    userId: z
      .string()
      .nonempty("아이디를 입력해주세요")
      .min(6, "아이디를 6글자, 18글자 이내로 입력해주세요.")
      .max(18, "아이디를 6글자, 18글자 이내로 입력해주세요.")
      .regex(
        /^[a-zA-Z][a-zA-Z0-9]*$/,
        "영문으로 시작하고 영문과 숫자만 사용할 수 있습니다",
      ),
    password: z
      .string()
      .min(
        8,
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      )
      .max(
        20,
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      )
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      ),
    confirmPassword: z
      .string()
      .nonempty("비밀번호와 동일하게 입력해주세요.")
      .min(
        8,
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      )
      .max(
        20,
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      )
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
        "문자, 숫자, 특수문자를 조합하여 8글자, 20글자 이내로 입력해주세요.",
      ),
    userName: z
      .string()
      .min(1, "이름을 입력해주세요")
      .regex(/^[가-힣]*[가-힣][가-힣]*$/, "올바른 한글 이름을 입력해주세요"),
    userPhoneNumber: z
      .string()
      .regex(
        /^010\d{8}$/,
        "[ - ] 없이 010으로 시작하는 11자리 숫자여야 합니다 ",
      ),
    userBirth: z
      .string()
      .regex(/^\d{8}$/, "YYYYMMDD 형식으로 입력해주세요")
      .refine((val) => {
        const year = parseInt(val.slice(0, 4));
        const month = parseInt(val.slice(4, 6));
        const day = parseInt(val.slice(6, 8));

        if (month < 1 || month > 12) return false;
        if (day < 1 || day > 31) return false;

        const date = new Date(year, month - 1, day);
        return (
          date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day
        );
      }, "올바른 날짜를 입력해주세요"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호와 일치하지 않습니다.",
  });
