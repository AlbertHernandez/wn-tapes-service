import { Module } from '@nestjs/common';
import { TapesService } from './tapes.service';

@Module({
  providers: [TapesService],
  exports: [TapesService],
})
export class TapesDomainModule {}
