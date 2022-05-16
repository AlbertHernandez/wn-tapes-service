import { ConfigIdentifier } from './config-identifier.constant';
import { ServerConfig } from './server.config';
import { LoggerConfig } from './logger.config';
import pino from 'pino';
import { Environment } from './environment.constant';

const isNodeEnv = (env: Environment): boolean => process.env.NODE_ENV === env;

const serverConfigLoader = (): ServerConfig => ({
  port: Number(process.env.PORT),
  development: isNodeEnv(Environment.Development),
  test: isNodeEnv(Environment.Test),
  beta: isNodeEnv(Environment.Beta),
  production: isNodeEnv(Environment.Production),
  environment: process.env.NODE_ENV as Environment,
  serviceName: 'Tapes Service',
});

const loggerConfigLoader = (): LoggerConfig => ({
  level: process.env.LOGGER_LEVEL as pino.LevelWithSilent,
  isEnabled: process.env.LOGGER_IS_DISABLED !== 'true',
});

export const configLoader = () => ({
  [ConfigIdentifier.Server]: serverConfigLoader(),
  [ConfigIdentifier.Logger]: loggerConfigLoader(),
});
