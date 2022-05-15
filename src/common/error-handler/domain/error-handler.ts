export interface ErrorHandler {
  handleError(error: Error): Promise<void>;
}

export const ERROR_HANDLER = 'ErrorHandler';
