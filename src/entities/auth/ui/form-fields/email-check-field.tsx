import { z } from "zod";
import Spinner from "@shared/ui/spinner";

interface EmailCheckFieldProps {
  value: string;
  onChange: (v: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  loading: boolean;
  onCheck: () => void;
  error: string | null;
  checkResult: "ok" | "exists" | null;
}

export function EmailCheckField({
  value,
  onChange,
  inputRef,
  loading,
  onCheck,
  error,
  checkResult,
}: EmailCheckFieldProps) {
  const emailSchema = z
    .string()
    .nonempty("이메일을 입력해주세요")
    .email("올바른 이메일 형식이 아닙니다");
  const validation = emailSchema.safeParse(value);
  const isValid = validation.success;
  const errorMsg =
    !isValid && value ? validation.error.issues[0].message : null;

  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className="text-xs text-gray-500 mb-1"
        htmlFor="dialog-email-input"
      >
        사용할 이메일을 입력하세요
      </label>
      <div className="flex gap-2 w-full">
        <input
          id="dialog-email-input"
          ref={inputRef}
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="이메일을 입력하세요"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          autoComplete="off"
          aria-label="이메일"
        />
        <button
          type="button"
          onClick={onCheck}
          className="min-w-[72px] flex items-center justify-center text-xs px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition border border-blue-500 disabled:bg-gray-200 disabled:text-gray-400"
          disabled={loading || !isValid}
          aria-disabled={loading || !isValid}
        >
          {loading ? <Spinner className="h-4 w-4" /> : "중복확인"}
        </button>
      </div>
      {errorMsg && <div className="text-red-500 text-xs mt-1">{errorMsg}</div>}
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
      {checkResult === "ok" && (
        <div className="text-green-600 text-sm mt-1">
          사용 가능한 이메일입니다.
        </div>
      )}
      {checkResult === "exists" && (
        <div className="text-red-600 text-sm mt-1">
          이미 사용 중인 이메일입니다.
        </div>
      )}
    </div>
  );
}
