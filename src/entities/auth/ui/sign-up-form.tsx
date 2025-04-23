"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/src/shared/shadcn-ui/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../model/schema";
import { UserSchema } from "../model/types";
import { BirthDateSelect } from "./birth-date-select";
import { ConfirmPasswordField } from "./form-fields/confirm-password-field";
import { PasswordField } from "./form-fields/password-field";
import { PhoneNumberField } from "./form-fields/phone-number-field";
import { UserIdField } from "./form-fields/user-id-field";
import { UserNameField } from "./form-fields/user-name-field";

export function SignUpForm() {
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    mode: "onBlur",
    defaultValues: {
      userId: "",
      password: "",
      confirmPassword: "",
      userName: "",
      userPhoneNumber: "",
      userBirth: "",
    },
  });

  const onSubmit = (data: UserSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="space-y-6">
          <UserIdField control={form.control} />
          <PasswordField control={form.control} />
          <ConfirmPasswordField control={form.control} />
          <UserNameField control={form.control} />
          <PhoneNumberField control={form.control} />
          <BirthDateSelect control={form.control} />
          <button
            type="submit"
            disabled={!form.formState.isValid}
            className={`w-full py-2 text-base font-semibold rounded-xl transition-all duration-200 ${
              form.formState.isValid
                ? "bg-[#0064FF] text-white hover:bg-[#0050CC] active:bg-[#0046B8] cursor-pointer"
                : "bg-[#F2F4F6] text-[#CACDD2] cursor-not-allowed"
            }`}
          >
            가입하기
          </button>
        </div>
      </form>
    </Form>
  );
}
