export class BaseException extends Error {
  readonly code;
  readonly meta?;
  readonly isOperational;

  constructor(error: { message: string }) {
    super(error.message);

    Error.captureStackTrace(this, this.constructor);
  }
}
