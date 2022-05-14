import { ConfigIdentifier } from '../config-identifier.constant';
import { ServerConfig } from '../server-config.interface';

export const getServerConfigResolver = (): {
  [ConfigIdentifier.Server]: ServerConfig;
} => ({
  [ConfigIdentifier.Server]: {
    port: Number(process.env.PORT),
  },
});
