"use client";

import useAuthAction from "@entities/auth/hooks/use-auth-action";
import { ConfirmPasswordField } from "@entities/auth/ui/form-fields/confirm-password-field";
import EmailField from "@entities/auth/ui/form-fields/email-field";
import PasswordField from "@entities/auth/ui/form-fields/password-field";
import { PhoneNumberField } from "@entities/auth/ui/form-fields/phone-number-field";
import { UserBirthField } from "@entities/auth/ui/form-fields/user-birth-field";
import { UserNameField } from "@entities/auth/ui/form-fields/user-name-field";
import { Form } from "@shared/shadcn-ui/components";

export function SignUpForm() {
  const { signUpForm, handleSignUp } = useAuthAction();

  return (
    <Form {...signUpForm}>
      <form
        onSubmit={signUpForm.handleSubmit(handleSignUp)}
        className="w-full max-w-md"
      >
        <div className="space-y-4">
          <EmailField control={signUpForm.control} name={"userEmail"} />
          <PasswordField control={signUpForm.control} name={"password"} />
          <ConfirmPasswordField control={signUpForm.control} />
          <UserNameField control={signUpForm.control} />
          <PhoneNumberField control={signUpForm.control} />
          <UserBirthField control={signUpForm.control} />
          <div className="mt-8">
            <button
              type="submit"
              disabled={!signUpForm.formState.isValid}
              className={`w-full py-2 text-base font-semibold rounded-md transition-all duration-200 ${
                signUpForm.formState.isValid
                  ? "bg-[#0064FF] text-white hover:bg-[#0050CC] active:bg-[#0046B8] cursor-pointer"
                  : "bg-[#F2F4F6] text-[#CACDD2] cursor-not-allowed"
              }`}
            >
              가입하기
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}
