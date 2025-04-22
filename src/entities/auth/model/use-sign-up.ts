import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const isValidDate = (year: string, month: string, day: string): boolean => {
  if (!year || !month || !day) return false;
  const date = new Date(`${year}-${month}-${day}`);
  return (
    date.getFullYear().toString() === year &&
    (date.getMonth() + 1).toString() === month &&
    date.getDate().toString() === day
  );
};

const userSchema = z
  .object({
    userId: z
      .string()
      .min(6, {
        message: "6글자 이상 입력해주세요.",
      })
      .max(20, {
        message: "20글자 이하로 입력해주세요.",
      })
      .nonempty({
        message: "필수 입력 사항입니다.",
      }),
    password: z
      .string()
      .min(8, {
        message: "문자, 숫자, 특수문자를 사용하여 8글자 이상로 입력해주세요.",
      })
      .max(20, {
        message: "문자, 숫자, 특수문자를 사용하여 20글자 이하로 입력해주세요.",
      }),

    confirmPassword: z.string(),
    userName: z.string(),
    userPhoneNumber: z.string(),
    userBirth: z.object({
      year: z.string(),
      month: z.string(),
      day: z.string(),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호와 일치하지 않습니다.",
  })
  .refine(
    (data) =>
      isValidDate(
        data.userBirth.year,
        data.userBirth.month,
        data.userBirth.day,
      ),
    {
      path: ["userBirth"],
      message: "모든 날짜를 선택해주세요.",
    },
  );

type UserType = z.infer<typeof userSchema>;

export default function useSignUp() {
  const form = useForm<UserType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      userId: "",
      password: "",
      confirmPassword: "",
      userName: "",
      userPhoneNumber: "",
      userBirth: {
        year: "",
        month: "",
        day: "",
      },
    },
  });

  function onSubmit(values: UserType) {
    ~console.log(values);
  }

  return { form, onSubmit };
}
