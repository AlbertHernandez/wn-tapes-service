import { Module } from '@nestjs/common';
import { TapesUseCasesModule } from './application';
import { TapesDomainModule } from './domain';
import { TapesInfrastructureModule } from './infrastructure';

@Module({
  imports: [TapesUseCasesModule, TapesDomainModule, TapesInfrastructureModule],
})
export class TapesModule {}
