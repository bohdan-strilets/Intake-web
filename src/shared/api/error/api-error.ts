import type { ErrorCode } from './error-codes';

export class ApiError extends Error {
  public readonly code: ErrorCode;
  public readonly status?: number;

  constructor(code: ErrorCode, status?: number) {
    super(code);
    this.code = code;
    this.status = status;
  }
}
