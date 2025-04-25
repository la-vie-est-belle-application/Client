import { z } from "zod";
import { isValidDate } from "@entities/auth/lib/validate-date";

export const userSchema = z
  .object({
    userEmail: z
      .string()
      .nonempty("이메일을 입력해주세요")
      .email("올바른 이메일 형식이 아닙니다"),
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
      .refine((val) => isValidDate(val), {
        message: "올바른 날짜를 입력해주세요",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호와 일치하지 않습니다.",
  });

export const loginSchema = z.object({
  userEmail: z.string(),
  password: z.string(),
});
