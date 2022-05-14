import { Logger, Module } from '@nestjs/common';
import { TapesUseCasesModule } from './application';
import { TapesDomainModule } from './domain';
import { TapesInfrastructureModule } from './infrastructure';
import { SharedModule } from '../shared';

@Module({
  imports: [
    SharedModule,
    TapesUseCasesModule,
    TapesDomainModule,
    TapesInfrastructureModule,
  ],
})
export class TapesModule {}
