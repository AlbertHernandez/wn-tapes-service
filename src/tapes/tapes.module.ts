import { Module } from '@nestjs/common';
import { TapesUseCasesModule } from './application';
import { TapesDomainModule } from './domain';
import { TapesInfrastructureModule } from './infrastructure';
import { CommonModule } from '../common';

@Module({
  imports: [
    CommonModule,
    TapesUseCasesModule,
    TapesDomainModule,
    TapesInfrastructureModule,
  ],
})
export class TapesModule {}
