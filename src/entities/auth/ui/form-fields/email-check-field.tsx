"use client";

import React, { useState } from "react";
import useAuthAction from "@entities/auth/hooks/use-auth-action";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from "@shared/shadcn-ui/components";

// 본인이 작성한 함수 경로에 맞게 조정

export function EmailCheckField() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { handleDuplicatedEmail } = useAuthAction();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorMessage(null); // 입력 변화시 에러 초기화
  };

  const handleCheckEmail = async () => {
    if (!email) {
      setErrorMessage("이메일을 입력해주세요.");
      return;
    }

    const result = await handleDuplicatedEmail({ userEmail: email });

    if (result.isDuplicated) {
      setErrorMessage(result.message ?? "이미 사용 중인 이메일입니다.");
    } else {
      setErrorMessage(null);
      alert("사용 가능한 이메일입니다."); // 필요 시 UI 변경
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>이메일 중복 확인</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>이메일 중복 확인</DialogTitle>
          <DialogDescription>
            이메일을 입력하고 중복 여부를 확인하세요.
          </DialogDescription>
          <Input
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 입력"
          />
          {errorMessage && (
            <p style={{ color: "red", marginTop: "8px" }}>{errorMessage}</p>
          )}
          <Button
            type="button"
            onClick={handleCheckEmail}
            style={{ marginTop: 12 }}
          >
            확인
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
