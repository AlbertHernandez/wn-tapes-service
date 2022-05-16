import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TapesModule } from './tapes';
import { CommonModule } from './common';
import { ResponseTimeMiddleware } from '@nest-middlewares/response-time';
import { ALL_ROUTES } from './common/http/routes';

@Module({
  imports: [CommonModule, TapesModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(ResponseTimeMiddleware).forRoutes(ALL_ROUTES);
  }
}
