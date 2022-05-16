import { ErrorHandler as IErrorHandler } from '../domain/error-handler';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ErrorHandler implements IErrorHandler {
  private readonly logger = new Logger(ErrorHandler.name);

  async handleError(error: Error): Promise<void> {
    this.logger.error({
      message: error.message,
      context: {
        errorName: error.name,
        stack: error.stack,
      },
    });
  }
}
