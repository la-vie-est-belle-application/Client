"use client";

import Link from "next/link";
import useAuthAction from "@entities/auth/hooks/use-auth-action";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";
import { Form, FormMessage } from "@shared/shadcn-ui/components";
import { Spinner } from "@shared/ui/spinner";

export function LoginForm() {
  const { loginForm, handleLogin } = useAuthAction();

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(handleLogin)}
        className="w-full max-w-md bg-white rounded-lg p-8 space-y-6"
      >
        <div className="space-y-4">
          <BaseField
            control={loginForm.control}
            name={"userEmail"}
            label="이메일"
            placeholder="이메일을 입력해주세요."
            type="email"
          />
          <BaseField
            control={loginForm.control}
            name={"password"}
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
          <FormMessage className="text-xs text-red-600 mt-1">
            {loginForm.formState.errors.root?.serverError?.message}
          </FormMessage>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={
              !loginForm.formState.isValid || loginForm.formState.isSubmitting
            }
            className={`w-full py-2 text-base font-semibold rounded-md transition-all cursor-pointer flex justify-center items-center
              ${
                loginForm.formState.isValid && !loginForm.formState.isSubmitting
                  ? "bg-[#0064FF] text-white hover:bg-[#0050CC] active:bg-[#0046B8]"
                  : "bg-[#F2F4F6] text-[#CACDD2] cursor-not-allowed"
              }
            `}
          >
            {loginForm.formState.isSubmitting ? (
              <Spinner className="h-5 w-5" />
            ) : (
              "로그인"
            )}
          </button>
        </div>

        <div className="mt-4 text-center">
          <Link href={"/sign-up"}>
            <button type="button" className="cursor-pointer text-sm">
              <span className=" text-gray-500">아직 회원이 아니신가요? </span>
              <span className="text-[#0064FF] hover:text-[#0050CC] font-semibold cursor-pointer">
                회원가입
              </span>
            </button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
