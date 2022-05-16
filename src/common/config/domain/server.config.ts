import { Environment } from './environment.constant';

export interface ServerConfig {
  port: number;
  development: boolean;
  test: boolean;
  beta: boolean;
  production: boolean;
  environment: Environment;
  serviceName: string;
}
