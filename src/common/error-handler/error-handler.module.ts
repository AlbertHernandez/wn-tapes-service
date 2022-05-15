import { Module } from '@nestjs/common';
import { ErrorHandler } from './infrastructure/error-handler';
import { ERROR_HANDLER } from './domain/error-handler';
import { LoggerModule } from '../logger';

const errorHandlerConfig = {
  provide: ERROR_HANDLER,
  useClass: ErrorHandler,
};

@Module({
  imports: [LoggerModule],
  providers: [errorHandlerConfig],
  exports: [errorHandlerConfig],
})
export class ErrorHandlerModule {}
