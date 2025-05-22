import { useCallback, useEffect, useRef, useState } from "react";
import { Path, useFormContext } from "react-hook-form";
import { emailDuplicateAction } from "@entities/auth/api/actions";
import {
  AuthCredentials,
  AuthProfile,
  CheckResult,
} from "@entities/auth/types";

interface UseAuthEmailReturn {
  dialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  dialogEmail: string;
  setDialogEmail: (email: string) => void;
  checkResult: CheckResult;
  loading: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
  error: string | null;
  handleCheck: () => Promise<void>;
  handleConfirm: () => void;
}

export function useAuthEmail<T extends AuthProfile | AuthCredentials>(
  name: Path<T>,
): UseAuthEmailReturn {
  const { setValue, getValues } = useFormContext<T>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogEmail, setDialogEmail] = useState("");
  const [checkResult, setCheckResult] = useState<CheckResult>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dialogOpen) {
      setDialogEmail((getValues(name) as string) || "");
      setCheckResult(null);
      setError(null);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogOpen]);

  useEffect(() => {
    setCheckResult(null);
    setError(null);
  }, [dialogEmail]);

  const openDialog = useCallback(() => {
    setDialogEmail((getValues(name) as string) || "");
    setCheckResult(null);
    setError(null);
    setDialogOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, [getValues, name]);

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const handleCheck = useCallback(async () => {
    if (!dialogEmail) return;
    setLoading(true);
    setError(null);
    try {
      const exists = await emailDuplicateAction(dialogEmail);
      setCheckResult(exists ? "exists" : "ok");
    } catch (e) {
      setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
      setCheckResult(null);
    } finally {
      setLoading(false);
    }
  }, [dialogEmail]);

  const handleConfirm = useCallback(() => {
    setValue(name, dialogEmail as any, { shouldValidate: true });
    setDialogOpen(false);
  }, [dialogEmail, name, setValue]);

  return {
    dialogOpen,
    openDialog,
    closeDialog,
    dialogEmail,
    setDialogEmail,
    checkResult,
    loading,
    inputRef,
    error,
    handleCheck,
    handleConfirm,
  };
}
