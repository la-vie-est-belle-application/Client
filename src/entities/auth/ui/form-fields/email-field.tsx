"use client";

import { Control, Path, PathValue, useFormContext } from "react-hook-form";

import { EmailCheckField } from "./email-check-field";
import { AuthCredentials, AuthProfile } from "@entities/auth/types";
import { BaseField } from "@entities/auth/ui/form-fields/base-field";
import { useEmailDuplicationCheckDialog } from '@entities/auth/hooks/use-email-duplication-check-dialog';

interface EmailFieldProps<T extends AuthProfile | AuthCredentials> {
  control: Control<T>;
  name: Path<T>;
}

export default function EmailField<T extends AuthProfile | AuthCredentials>({
  control,
  name,
}: EmailFieldProps<T>): React.ReactElement {
  const { getValues, setValue } = useFormContext<T>();
  const currentFormEmail = getValues(name);

  const {
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
    openDialog,
    closeDialog,
  } = useEmailDuplicationCheckDialog();

  return (
    <>
      <BaseField
        control={control}
        name={name}
        label="이메일"
        placeholder="이메일을 입력해주세요."
        type="email"
        onFocus={() => openDialog(currentFormEmail, (confirmedEmail) => {
          setValue(name, confirmedEmail as PathValue<T, Path<T>>, { shouldValidate: true });
        })}
      />

      {isOpen && (
        <EmailCheckField
          isOpen={isOpen}
          tempEmail={tempEmail}
          setTempEmail={setTempEmail}
          isLoading={isLoading}
          isDuplicated={isDuplicated}
          errorMessage={errorMessage}
          validationError={validationError}
          isValid={isValid}
          handleCheck={handleCheck}
          handleConfirm={handleConfirm}
          onClose={closeDialog}
        />
      )}
    </>
  );
}