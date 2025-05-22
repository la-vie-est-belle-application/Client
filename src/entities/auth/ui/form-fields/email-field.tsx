"use client";

import * as React from "react";
import { Control, Path } from "react-hook-form";
import { useAuthEmail } from "@entities/auth/hooks/use-auth-email";
import { AuthCredentials, AuthProfile } from "@entities/auth/types";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";
import { EmailCheckField } from "@entities/auth/ui/form-fields/email-check-field";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@shared/shadcn-ui/components/dialog";

interface EmailFieldProps<T extends AuthProfile | AuthCredentials> {
  control: Control<T>;
  name: Path<T>;
}

export default function EmailField<T extends AuthProfile | AuthCredentials>({
  control,
  name,
}: EmailFieldProps<T>): React.ReactElement {
  const {
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
  } = useAuthEmail<T>(name);

  return (
    <>
      <BaseField
        control={control}
        name={name}
        label="이메일"
        placeholder="이메일을 입력해주세요."
        type="email"
        rightElement={null}
        showMessage={true}
        onFocus={openDialog}
      />
      <Dialog open={dialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="rounded-xl shadow-2xl p-8 max-w-xs w-full flex flex-col gap-4 items-center">
          <DialogTitle className="text-lg font-bold mb-2 text-center">
            이메일 중복확인
          </DialogTitle>
          <DialogDescription>
            사용할 이메일을 입력하고 중복확인을 진행하세요.
          </DialogDescription>
          <EmailCheckField
            value={dialogEmail}
            onChange={setDialogEmail}
            inputRef={inputRef}
            loading={loading}
            onCheck={handleCheck}
            error={error}
            checkResult={checkResult}
          />
          <button
            type="button"
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold text-base mt-2 disabled:bg-gray-300 disabled:text-gray-500 transition"
            disabled={checkResult !== "ok"}
            onClick={handleConfirm}
          >
            이 이메일로 사용하기
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
