import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { ConfigIdentifier, ServerConfig } from '../config';
import { LoggerConfig } from '../config/domain/logger.config';

@Module({
  imports: [
    PinoLoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const loggerConfig = configService.get<LoggerConfig>(
          ConfigIdentifier.Logger,
        );
        const serverConfig = configService.get<ServerConfig>(
          ConfigIdentifier.Server,
        );

        return {
          pinoHttp: {
            name: 'WN - Tapes Service',
            level: loggerConfig.level,
            transport: serverConfig.development
              ? { target: 'pino-pretty' }
              : undefined,
          },
        };
      },
    }),
  ],
})
export class LoggerModule {}
