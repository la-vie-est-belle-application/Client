"use client";

import Link from "next/link";
import useAuthAction from "@entities/auth/hooks/use-auth-action";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";
import EmailField from "@entities/auth/ui/form-fields/email-field";
import { PasswordField } from "@entities/auth/ui/form-fields/password-field";
import { Form, FormMessage } from "@shared/shadcn-ui/components";
import { Spinner } from "@shared/ui/spinner";

export function SignUpForm() {
  const { signupForm, handleSignup } = useAuthAction();

  return (
    <Form {...signupForm}>
      <form
        onSubmit={signupForm.handleSubmit(handleSignup)}
        className="w-full max-w-md"
      >
        <div className="space-y-4">
          <EmailField control={signupForm.control} name={"userEmail"} />
          <PasswordField
            control={signupForm.control}
            name={"password"}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
          <PasswordField
            control={signupForm.control}
            name={"confirmPassword"}
            label="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            type="password"
          />
          <BaseField
            control={signupForm.control}
            name={"userName"}
            label="이름"
            placeholder="홍길동"
            type="text"
          />
          <BaseField
            control={signupForm.control}
            name={"userPhoneNumber"}
            label="전화번호"
            placeholder="01012345678"
            type="text"
          />
          <BaseField
            control={signupForm.control}
            name={"userBirth"}
            label="생년월일"
            placeholder="생년월일(YYYYMMDD)"
            type="text"
          />
          <FormMessage className="text-xs text-red-600 mt-1">
            {signupForm.formState.errors.root?.serverError?.message}
          </FormMessage>
          <div className="mt-8">
            <button
              type="submit"
              disabled={
                !signupForm.formState.isValid ||
                signupForm.formState.isSubmitting
              }
              className={`w-full py-2 text-base font-semibold rounded-md transition-all duration-200 flex justify-center items-center
                ${
                  signupForm.formState.isValid &&
                  !signupForm.formState.isSubmitting
                    ? "bg-[#0064FF] text-white hover:bg-[#0050CC] active:bg-[#0046B8] cursor-pointer"
                    : "bg-[#F2F4F6] text-[#CACDD2] cursor-not-allowed"
                }
              `}
            >
              {signupForm.formState.isSubmitting ? (
                <Spinner className="h-5 w-5" />
              ) : (
                "가입하기"
              )}
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link href={"/login"} passHref legacyBehavior>
              <button className="inline-block text-sm text-gray-500 hover:underline cursor-pointer">
                이미 회원이신가요?{" "}
                <span className="text-[#0064FF] hover:text-[#0050CC] font-semibold cursor-pointer">
                  로그인
                </span>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
