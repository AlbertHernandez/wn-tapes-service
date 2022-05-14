import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { TapesAppModule } from './tapes.app.module';
import { Logger } from '@nestjs/common';
import { ServerConfig } from './shared/config/server.config';
import { ConfigIdentifier } from './shared/config/config-identifier.constant';
import { API } from './shared/routes/routes.constants';

async function bootstrap() {
  const app = await NestFactory.create(TapesAppModule);
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
