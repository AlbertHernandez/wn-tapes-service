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

        // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
        const pinoLevelToSeverityLookup = {
          trace: 'DEBUG',
          debug: 'DEBUG',
          info: 'INFO',
          warn: 'WARNING',
          error: 'ERROR',
          fatal: 'CRITICAL',
        };

        return {
          pinoHttp: {
            enabled: loggerConfig.isEnabled,
            messageKey: 'message',
            level: loggerConfig.level,
            transport: serverConfig.development
              ? { target: 'pino-pretty' }
              : undefined,
            timestamp: () =>
              `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
            base: {
              service: {
                projectName: serverConfig.serviceName,
                environment: serverConfig.environment,
              },
            },
            formatters: {
              level(label: string, level: number) {
                return {
                  severity:
                    pinoLevelToSeverityLookup[label] ||
                    pinoLevelToSeverityLookup.info,
                  level,
                };
              },
            },
          },
        };
      },
    }),
  ],
})
export class LoggerModule {}
