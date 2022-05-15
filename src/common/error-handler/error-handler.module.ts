import { Module } from '@nestjs/common';
import { ErrorHandler } from './infrastructure/error-handler';
import { ERROR_HANDLER } from './domain/error-handler';
import { LoggerModule } from '../logger';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorHandlerInterceptor } from './infrastructure/error-handler.interceptor';

const errorHandlerConfig = {
  provide: ERROR_HANDLER,
  useClass: ErrorHandler,
};

@Module({
  imports: [LoggerModule],
  providers: [
    errorHandlerConfig,
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorHandlerInterceptor,
    },
  ],
  exports: [errorHandlerConfig],
})
export class ErrorHandlerModule {}
