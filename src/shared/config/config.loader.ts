import { ConfigIdentifier } from './config-identifier.constant';
import { ServerConfig } from './server.config';

const serverConfigLoader = (): ServerConfig => ({
  port: Number(process.env.PORT),
});

export const configLoader = () => ({
  [ConfigIdentifier.Server]: serverConfigLoader(),
});
