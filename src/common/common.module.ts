import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config';
import { LoggerModule } from './logger';
import { ErrorHandlerModule } from './error-handler';

const modules = [ConfigurationModule, LoggerModule, ErrorHandlerModule];

@Module({
  imports: modules,
  exports: modules,
})
export class CommonModule {}
