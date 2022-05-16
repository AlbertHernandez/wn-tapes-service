import { ConfigIdentifier } from './config-identifier.constant';
import { ServerConfig } from './server.config';
import { LoggerConfig } from './logger.config';
import pino from 'pino';

const serverConfigLoader = (): ServerConfig => ({
  port: Number(process.env.PORT),
});

const loggerConfigLoader = (): LoggerConfig => ({
  level: process.env.LOGGER_LEVEL as pino.LevelWithSilent,
});

export const configLoader = () => ({
  [ConfigIdentifier.Server]: serverConfigLoader(),
  [ConfigIdentifier.Logger]: loggerConfigLoader(),
});
