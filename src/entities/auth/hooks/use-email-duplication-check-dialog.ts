import { useCallback, useRef, useState } from "react";
import { emailDuplicateAction } from "@entities/auth/api/actions";
import { emailOnlySchema } from "@entities/auth/model/schema";
import { useCheckEmailDialogStore } from "@entities/auth/store/email-check-dialog-store";

export function useEmailDuplicationCheckDialog() {
  const {
    isOpen,
    setIsOpen,
    isLoading,
    setIsLoading,
    isDuplicated,
    setIsDuplicated,
    errorMessage,
    setErrorMessage,
    reset,
  } = useCheckEmailDialogStore();

  const [tempEmail, setTempEmail] = useState("");
  const onConfirmedRef = useRef<((email: string) => void) | null>(null);

  const validation = emailOnlySchema.safeParse({ email: tempEmail });
  const isValid = validation.success;
  const validationError =
    !validation.success && tempEmail
      ? validation.error.issues[0].message
      : null;

  const openDialog = useCallback(
    (initialEmail: string, onConfirmed: (email: string) => void) => {
      setTempEmail(initialEmail);
      onConfirmedRef.current = onConfirmed;
      setIsDuplicated(null);
      setErrorMessage("");
      setIsOpen(true);
    },
    [setIsOpen, setErrorMessage, setIsDuplicated],
  );

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    setTempEmail("");
    setIsLoading(false);
    setIsDuplicated(null);
    setErrorMessage("");
    onConfirmedRef.current = null;
    reset();
  }, [setIsOpen, setIsLoading, setIsDuplicated, setErrorMessage, reset]);

  const handleCheck = useCallback(async () => {
    if (!isValid) return;
    setIsLoading(true);
    setErrorMessage("");
    setIsDuplicated(null);
    try {
      const exists = await emailDuplicateAction(tempEmail);
      setIsDuplicated(exists ? "exists" : "ok");
    } catch {
      setErrorMessage("서버 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  }, [tempEmail, isValid, setIsLoading, setErrorMessage, setIsDuplicated]);

  const handleConfirm = useCallback(() => {
    if (isDuplicated === "ok" && onConfirmedRef.current) {
      onConfirmedRef.current(tempEmail);
      closeDialog();
    }
  }, [isDuplicated, tempEmail, closeDialog]);

  return {
    isOpen,
    tempEmail,
    setTempEmail,
    isLoading,
    isDuplicated,
    errorMessage,
    validationError,
    isValid,
    openDialog,
    closeDialog,
    handleCheck,
    handleConfirm,
  };
}
