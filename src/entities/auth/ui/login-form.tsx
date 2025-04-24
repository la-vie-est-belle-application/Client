"use client";

import { useRouter } from "next/navigation";
import useAuthAction from "@entities/auth/hooks/use-auth-action";
import EmailField from "@entities/auth/ui/form-fields/email-field";
import PasswordField from "@entities/auth/ui/form-fields/password-field";
import { Form, FormMessage } from "@shared/shadcn-ui/components";

export function LoginForm() {
  const { loginForm, handleLogin } = useAuthAction();
  const router = useRouter();

  const goToSignUp = () => {
    router.push("/sign-up");
  };

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(handleLogin)}
        className="w-full max-w-md bg-white rounded-lg p-8 space-y-6"
      >
        <div className="space-y-4">
          <EmailField control={loginForm.control} name={"userEmail"} />
          <PasswordField control={loginForm.control} name={"password"} />
          <FormMessage className="text-xs text-red-600 mt-1">
            {loginForm.formState.errors.root?.serverError?.message}
          </FormMessage>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full py-2 text-base font-semibold rounded-md bg-[#0064FF] text-white hover:bg-[#0050CC] active:bg-[#0046B8] transition-all cursor-pointer"
          >
            로그인
          </button>
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">
            아직 회원이 아니신가요?{" "}
            <button
              type="button"
              onClick={goToSignUp}
              className="text-[#0064FF] hover:text-[#0050CC] font-semibold cursor-pointer"
            >
              회원가입
            </button>
          </span>
        </div>
      </form>
    </Form>
  );
}
