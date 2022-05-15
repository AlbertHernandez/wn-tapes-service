import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ServerConfig, ConfigIdentifier, API } from './common';
import { TapesAppModule } from './tapes.app.module';

async function bootstrap() {
  const app = await NestFactory.create(TapesAppModule);

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
