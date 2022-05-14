import { Module } from '@nestjs/common';
import { GetTapesHttpController } from './get-tapes.http.controller';
import { TapesService } from './tapes.service';

@Module({
  controllers: [GetTapesHttpController],
  providers: [TapesService],
})
export class TapesModule {}
