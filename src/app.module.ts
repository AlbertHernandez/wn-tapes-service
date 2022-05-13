import { Module } from '@nestjs/common';
import { ConfigurationModule } from './infrastructure/configuration/configuration.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { TapesModule } from './contexts/tapes/tapes.module';

@Module({
  imports: [ConfigurationModule, LoggerModule, TapesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
