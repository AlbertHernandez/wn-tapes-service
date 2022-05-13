import { Module } from '@nestjs/common';
import { TapesController } from './tapes.controller';
import { TapesService } from './tapes.service';

@Module({
  imports: [],
  controllers: [TapesController],
  providers: [TapesService],
})
export class TapesModule {}
