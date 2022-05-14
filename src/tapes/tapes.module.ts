import { Module } from '@nestjs/common';
import { TapesDomainModule } from './domain';
import { TapesUseCasesModule } from './use-cases/tapes.use-cases.module';
import { TapesInfrastructureModule } from './infrastructure/tapes.infrastructure.module';

@Module({
  imports: [TapesDomainModule, TapesUseCasesModule, TapesInfrastructureModule],
})
export class TapesModule {}
