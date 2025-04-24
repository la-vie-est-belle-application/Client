"use client";

import useSignUp from "@entities/auth/model/use-sign-up";
import { ConfirmPasswordField } from "@entities/auth/ui/form-fields/confirm-password-field";
import { PasswordField } from "@entities/auth/ui/form-fields/password-field";
import { PhoneNumberField } from "@entities/auth/ui/form-fields/phone-number-field";
import { UserBirthField } from "@entities/auth/ui/form-fields/user-birth-field";
import { UserEmailField } from "@entities/auth/ui/form-fields/user-email-field";
import { UserNameField } from "@entities/auth/ui/form-fields/user-name-field";
import { Form } from "@shared/shadcn-ui/components";

export function SignUpForm() {
  const { form, handleSubmit } = useSignUp();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full max-w-md"
      >
        <div className="space-y-4">
          <UserEmailField control={form.control} />
          <PasswordField control={form.control} />
          <ConfirmPasswordField control={form.control} />
          <UserNameField control={form.control} />
          <PhoneNumberField control={form.control} />
          <UserBirthField control={form.control} />
          <div className="mt-8">
            <button
              type="submit"
              disabled={!form.formState.isValid}
              className={`w-full py-2 text-base font-semibold rounded-md transition-all duration-200 ${
                form.formState.isValid
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
