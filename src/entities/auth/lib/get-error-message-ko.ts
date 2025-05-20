import { errorMessagesKo } from "@entities/auth/consts/error-messages";

type ErrorMessagesKoWithIndex = typeof errorMessagesKo & {
  [key: string]: string | undefined;
};

export function getErrorMessageKo(error: string | undefined) {
  if (!error) return;

  const code = toSnakeCase(error);
  const messages: ErrorMessagesKoWithIndex = errorMessagesKo;
  console.log(code);
  return (
    messages[code] ||
    "알 수 없는 오류가 발생하였습니다. 잠시 후 다시 시도해주세요."
  );
}

export function toSnakeCase(message: string): string {
  return message
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "_")
    .toLowerCase();
}
