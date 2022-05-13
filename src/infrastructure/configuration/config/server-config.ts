import { ServerConfig } from '../interfaces';
import { ConfigIdentifier } from '../constants';

export const getServerConfig = (): {
  [ConfigIdentifier.Server]: ServerConfig;
} => ({
  [ConfigIdentifier.Server]: {
    port: Number(process.env.PORT),
  },
});
