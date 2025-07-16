import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { toast } from "sonner";

// 성공 토스트
export const successToast = (message: string, options?: any) => {
  return toast(message, {
    icon: React.createElement(FaCheckCircle, {
      className: "text-green-500 size-5",
    }),
    style: {
      background: "var(--background)",
      border: "1px solid var(--border)",
      color: "var(--foreground)",
      fontSize: "0.875rem",
      gap: "0.5rem",
    },
    ...options,
  });
};

// 에러 토스트
export const errorToast = (message: string, options?: any) => {
  return toast(message, {
    icon: React.createElement(FaTimesCircle, {
      className: "text-red-500 size-5",
    }),
    style: {
      background: "var(--background)",
      border: "1px solid var(--border)",
      color: "var(--foreground)",
      fontSize: "0.875rem",
      gap: "0.5rem",
    },
    ...options,
  });
};

// 경고 토스트
export const warningToast = (message: string, options?: any) => {
  return toast(message, {
    icon: React.createElement(FaExclamationTriangle, {
      className: "text-yellow-500 size-5",
    }),
    style: {
      background: "var(--background)",
      border: "1px solid var(--border)",
      color: "var(--foreground)",
      fontSize: "0.875rem",
      gap: "0.5rem",
    },
    ...options,
  });
};

// 정보 토스트
export const infoToast = (message: string, options?: any) => {
  return toast(message, {
    icon: React.createElement(FaInfoCircle, { className: "text-blue-500" }),
    style: {
      background: "var(--background)",
      border: "1px solid var(--border)",
      color: "var(--foreground)",
      fontSize: "0.875rem",
      gap: "0.5rem",
    },
    ...options,
  });
};

// 기본 토스트 (기존 toast와 동일)
export const defaultToast = (message: string, options?: any) => {
  return toast(message, {
    style: {
      background: "var(--background)",
      border: "1px solid var(--border)",
      color: "var(--foreground)",
      fontSize: "0.875rem",
      gap: "0.5rem",
    },
    ...options,
  });
};
