import { SignUpInputField } from "../types";

interface AuthValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface Props {
  type: SignUpInputField;
  values: AuthValues;
}

export function handleInputValidate({ type, values }: Props): boolean {
  switch (type) {
    case SignUpInputField.email:
      if (values.email.trim() === "") {
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(values.email);

    case SignUpInputField.password:
      if (values.password.trim() === "") {
        return false;
      }

      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return passwordRegex.test(values.password);

    case SignUpInputField.passwordConfirm:
      if (values.passwordConfirm.trim() === "") {
        return false;
      }
      return values.password === values.passwordConfirm;

    default:
      return false;
  }
}
