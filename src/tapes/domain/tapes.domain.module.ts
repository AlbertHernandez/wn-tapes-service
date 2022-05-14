import { Module } from '@nestjs/common';
import { TapesCreator } from './tapes-creator.service';

@Module({
  providers: [TapesCreator],
  exports: [TapesCreator],
})
export class TapesDomainModule {}
