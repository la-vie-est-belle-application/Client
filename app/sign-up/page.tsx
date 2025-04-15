"use client";

import { useActionState } from "react";
import { InputField, handleSignUp } from "@/src/entities/auth";
import useAuthValidation from "@/src/entities/auth/model/use-auth-validation";

export default function SignUpPage() {
  const [formState, formAction] = useActionState(
    async (
      state: { success: boolean; message: string },
      formData: FormData,
    ) => {
      return handleSignUp(formData);
    },
    { success: true, message: "" },
  );

  const emailField = useAuthValidation({
    type: "email",
    placeholder: "이메일을 입력해주세요",
  });

  const passwordField = useAuthValidation({
    type: "password",
    placeholder: "비밀번호를 입력해주세요.",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          회원가입
        </h2>
        <form action={formAction} className="mt-8 space-y-6">
          <div>
            <div>
              <InputField {...emailField} />
            </div>
            <div className="mt-5">
              <InputField {...passwordField} />
            </div>
          </div>

          {formState?.success === false && (
            <div className="text-red-600 text-sm text-center">
              <p>{formState.message}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
