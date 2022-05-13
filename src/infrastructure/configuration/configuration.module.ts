import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getServerConfig } from './config';
import { environmentVariablesSchema } from './environment-variables.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getServerConfig],
      validationSchema: environmentVariablesSchema,
    }),
  ],
})
export class ConfigurationModule {}
