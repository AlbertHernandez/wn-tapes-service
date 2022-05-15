import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { environmentVariablesSchema } from './domain/environment-variables.schema';
import { configLoader } from './domain/config.loader';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configLoader],
      validationSchema: environmentVariablesSchema,
    }),
  ],
})
export class ConfigurationModule {}
