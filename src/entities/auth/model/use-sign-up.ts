import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "./schema";
import { UserSchema } from "./types";

export default function useSignUp() {
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    mode: "onTouched",
    defaultValues: {
      userId: "",
      password: "",
      confirmPassword: "",
      userName: "",
      userPhoneNumber: "",
      userBirth: "",
    },
  });

  function onSubmit(values: UserSchema) {
    console.log(values);
  }

  return { form, onSubmit };
}
