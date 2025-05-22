
import { AUTH_ERROR_MESSAGE } from "@shared/consts/error-messages";
import { ErrorMessagesKoWithIndex } from '@shared/types';

/**
 * 주어진 에러 메시지를 snake_case로 변환한 뒤,
 * `AUTH_ERROR_MESSAGE` 객체에서 해당 메시지를 찾아 반환합니다.
 *
 * @param error Supabase 등에서 전달받은 에러 문자열
 * @returns 한국어 에러 메시지 (없으면 기본 메시지 반환)
 */
export function getErrorMessageKo(
  error: string | undefined,
): string | undefined {
  if (!error) return;

  const code = toSnakeCase(error);
  const messages: ErrorMessagesKoWithIndex = { ...AUTH_ERROR_MESSAGE };

  return (
    messages[code] ??
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
