import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config';
import { LoggerModule } from './logger';

@Module({
  imports: [ConfigurationModule, LoggerModule],
  exports: [LoggerModule],
})
export class SharedModule {}
