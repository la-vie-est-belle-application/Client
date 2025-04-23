"use client";

import { SignUpForm } from "@/src/entities/auth/ui/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">회원가입</h2>
          <p className="mt-2 text-sm text-gray-600">
            모든 항목은 필수 입력사항입니다.
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
