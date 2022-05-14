import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getServerConfigResolver } from './resolvers';
import { environmentVariablesSchema } from './environment-variables.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [getServerConfigResolver],
      validationSchema: environmentVariablesSchema,
    }),
  ],
})
export class ConfigurationModule {}
