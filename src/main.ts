import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { TapesAppModule } from './tapes.app.module';
import { Logger } from '@nestjs/common';
import { ServerConfig } from './shared/configuration/server-config.interface';
import { ConfigIdentifier } from './shared/configuration/config-identifier.constant';

async function bootstrap() {
  const app = await NestFactory.create(TapesAppModule);

  const configService = app.get(ConfigService);
  const logger = app.get(Logger);
  const serverConfig = configService.get<ServerConfig>(ConfigIdentifier.Server);
  await app.listen(serverConfig.port);
  logger.log(
    `Tapes Service App is running at http://localhost:${serverConfig.port}`,
  );
}
bootstrap();
