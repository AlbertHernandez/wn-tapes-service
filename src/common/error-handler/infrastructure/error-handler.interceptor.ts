import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ERROR_HANDLER, ErrorHandler } from '../domain/error-handler';

@Injectable()
export class ErrorHandlerInterceptor implements NestInterceptor {
  constructor(
    @Inject(ERROR_HANDLER) private readonly errorHandler: ErrorHandler,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(async (err: HttpException | Error) => {
        let shouldHandleError = true;

        if (err instanceof HttpException) {
          const status = err.getStatus();
          const isClientError = status.toString().startsWith('4');
          shouldHandleError = !isClientError;
        }

        if (shouldHandleError) {
          await this.errorHandler.handleError(err);
        }

        throw err;
      }),
    );
  }
}
