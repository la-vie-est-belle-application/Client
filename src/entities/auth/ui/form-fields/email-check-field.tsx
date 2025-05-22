import { CheckResult } from "@entities/auth/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@shared/shadcn-ui/components";
import Spinner from "@shared/ui/spinner";

interface EmailCheckFieldProps {
  isOpen: boolean;
  tempEmail: string;
  setTempEmail: (email: string) => void;
  isLoading: boolean;
  isDuplicated: CheckResult;
  errorMessage: string;
  validationError?: string | null;
  isValid: boolean;
  handleCheck: () => void;
  handleConfirm: () => void;
  onClose: () => void;
}

export function EmailCheckField({
  isOpen,
  tempEmail,
  setTempEmail,
  isLoading,
  isDuplicated,
  errorMessage,
  validationError,
  isValid,
  handleCheck,
  handleConfirm,
  onClose,
}: EmailCheckFieldProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-xl shadow-2xl p-8 max-w-xs w-full flex flex-col gap-4 items-center">
        <DialogTitle className="text-lg font-bold mb-2 text-center">
          이메일 중복확인
        </DialogTitle>
        <DialogDescription>
          사용할 이메일을 입력하고 중복확인을 진행하세요.
        </DialogDescription>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="dialog-email-input"
            className="text-xs text-gray-500 mb-1"
          >
            이메일
          </label>
          <div className="flex gap-2 w-full">
            <input
              id="dialog-email-input"
              type="email"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoComplete="off"
              aria-label="이메일"
            />
            <button
              type="button"
              onClick={handleCheck}
              className="min-w-[72px] text-xs px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 border border-blue-500 disabled:bg-gray-200 disabled:text-gray-400 flex items-center justify-center"
              disabled={isLoading || !isValid}
            >
              {isLoading ? <Spinner className="h-4 w-4" /> : "중복확인"}
            </button>
          </div>
          {validationError && (
            <div className="text-red-500 text-xs">{validationError}</div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-xs">{errorMessage}</div>
          )}
          {isDuplicated === "ok" && (
            <div className="text-green-600 text-sm">
              사용 가능한 이메일입니다.
            </div>
          )}
          {isDuplicated === "exists" && (
            <div className="text-red-600 text-sm">
              이미 사용 중인 이메일입니다.
            </div>
          )}
        </div>
        <button
          type="button"
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold text-base mt-2 disabled:bg-gray-300 disabled:text-gray-500"
          disabled={isDuplicated !== "ok"}
          onClick={handleConfirm}
        >
          이 이메일로 사용하기
        </button>
      </DialogContent>
    </Dialog>
  );
}
