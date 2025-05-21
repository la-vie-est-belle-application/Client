"use client";

import useAuthAction from "@entities/auth/hooks/use-auth-action";
import { ConfirmPasswordField } from "@entities/auth/ui/form-fields/confirm-password-field";
import { EmailCheckField } from "@entities/auth/ui/form-fields/email-check-field";
import EmailField from "@entities/auth/ui/form-fields/email-field";
import PasswordField from "@entities/auth/ui/form-fields/password-field";
import { PhoneNumberField } from "@entities/auth/ui/form-fields/phone-number-field";
import { UserBirthField } from "@entities/auth/ui/form-fields/user-birth-field";
import { UserNameField } from "@entities/auth/ui/form-fields/user-name-field";
import {
  Button,
  Dialog,
  DialogTrigger,
  Form,
  FormMessage,
} from "@shared/shadcn-ui/components";

export function SignUpForm() {
  const { signupForm, handleSignup } = useAuthAction();

  return (
    <Form {...signupForm}>
      <Dialog>
        <EmailCheckField />
        <form
          onSubmit={signupForm.handleSubmit(handleSignup)}
          className="w-full max-w-md"
        >
          <div className="space-y-4">
            <div className="flex items-end gap-1">
              <EmailField control={signupForm.control} name={"userEmail"} />
              <DialogTrigger asChild>
                <Button type="button" variant={"primary"}>
                  중복확인
                </Button>
              </DialogTrigger>
            </div>
            <PasswordField control={signupForm.control} name={"password"} />
            <ConfirmPasswordField control={signupForm.control} />
            <UserNameField control={signupForm.control} />
            <PhoneNumberField control={signupForm.control} />
            <UserBirthField control={signupForm.control} />
            <FormMessage className="text-xs text-red-600 mt-1">
              {signupForm.formState.errors.root?.serverError?.message}
            </FormMessage>
            <div className="mt-8">
              <button
                type="submit"
                disabled={!signupForm.formState.isValid}
                className={`w-full py-2 text-base font-semibold rounded-md transition-all duration-200 ${
                  signupForm.formState.isValid
                    ? "bg-[#0064FF] text-white hover:bg-[#0050CC] active:bg-[#0046B8] cursor-pointer"
                    : "bg-[#F2F4F6] text-[#CACDD2] cursor-not-allowed"
                }`}
              >
                가입하기
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </Form>
  );
}
