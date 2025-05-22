import { ErrorType, Result } from "@shared/types";

const mapError = (error: unknown): ErrorType => {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: (error as any).code,
      status: (error as any).status,
    };
  }
  return {
    message: "알 수 없는 에러가 발생했습니다",
    code: "UNKNOWN_ERROR",
  };
};

const createSuccessResult = <T>(data: T): Result<T> => ({
  success: true,
  data,
});

const createErrorResult = (error: unknown): Result<never> => ({
  success: false,
  error: mapError(error),
});

const isServerError = (error: ErrorType): boolean => {
  return (error.status !== undefined && error.status >= 500);
};

export const withErrorHandling = async <T>(
  fn: () => Promise<T>,
  errorHandler?: (error: ErrorType) => void,
  retryCount = 3, 
  retryDelayMs = 500, 
): Promise<Result<T>> => {
  let attempt = 0;

  while (attempt < retryCount) {
    try {
      const result = await fn();
      return createSuccessResult(result);
    } catch (error) {
      const mappedError = mapError(error);
      errorHandler?.(mappedError);

      if (!isServerError(mappedError)) {
        return createErrorResult(error);
      }

      attempt++;

      if (attempt >= retryCount) {
        return createErrorResult(error);
      }

      if (retryDelayMs > 0) {
        await new Promise((res) => setTimeout(res, retryDelayMs));
      }
    }
  }
  
  return createErrorResult(new Error("최대 재시도 횟수 초과"));
};

