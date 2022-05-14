import { Module } from '@nestjs/common';
import { TapesDomainModule } from '../domain';
import * as tapesUseCases from './use-cases';

const useCases = Object.values(tapesUseCases);

@Module({
  imports: [TapesDomainModule],
  providers: useCases,
  exports: useCases,
})
export class TapesUseCasesModule {}
