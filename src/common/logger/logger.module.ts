import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { ConfigIdentifier } from '../config';
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

        return {
          pinoHttp: { level: loggerConfig.level },
        };
      },
    }),
  ],
})
export class LoggerModule {}
