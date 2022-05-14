import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config';
import { LoggerModule } from './logger';

const modules = [ConfigurationModule, LoggerModule];

@Module({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
