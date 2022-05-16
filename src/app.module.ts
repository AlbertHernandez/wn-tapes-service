import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TapesModule } from './tapes';
import { CommonModule } from './common';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { ALL_ROUTES } from './common/http/routes';
import { LogRequestResponseMiddleware } from './common/http/request/infrastructure/log-request-response.middleware';

@Module({
  imports: [CommonModule, TapesModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogRequestResponseMiddleware, ResponseTimeMiddleware)
      .forRoutes(ALL_ROUTES);
  }
}
