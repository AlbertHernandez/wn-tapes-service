import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { API } from './common/http/routes';
import { ConfigIdentifier, ServerConfig } from './common/config';
import { UnifiedRequestResponseInterceptor } from './common/http/request';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));

  app.use(helmet());

  app.useGlobalInterceptors(new UnifiedRequestResponseInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix(API);

  const configService = app.get(ConfigService);
  const logger = app.get(Logger);
  const serverConfig = configService.get<ServerConfig>(ConfigIdentifier.Server);
  await app.listen(serverConfig.port);
  logger.log(
    `Tapes Service App is running at http://localhost:${serverConfig.port}`,
  );
}
bootstrap();
