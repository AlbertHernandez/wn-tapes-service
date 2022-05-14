import { Module } from '@nestjs/common';
import { TapesGetter } from './get-tapes/tapes-getter.use-case';
import { TapesDomainModule } from '../domain';

@Module({
  imports: [TapesDomainModule],
  providers: [TapesGetter],
  exports: [TapesGetter],
})
export class TapesUseCasesModule {}
