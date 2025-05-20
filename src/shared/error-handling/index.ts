export type ErrorType = {
  message: string;
  code?: string;
  status?: number;
};

export type Result<T> = {
  success: boolean;
  data?: T;
  error?: ErrorType;
};

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

export const withErrorHandling = async <T>(
  fn: () => Promise<T>,
  errorHandler?: (error: ErrorType) => void,
): Promise<Result<T>> => {
  try {
    const result = await fn();
    return createSuccessResult(result);
  } catch (error) {
    const mappedError = mapError(error);
    errorHandler?.(mappedError);
    return createErrorResult(error);
  }
};
