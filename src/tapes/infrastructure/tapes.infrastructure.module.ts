import { Module } from '@nestjs/common';
import { GetTapesHttpController } from './get-tapes.http.controller';
import { TapesUseCasesModule } from '../use-cases/tapes.use-cases.module';

@Module({
  imports: [TapesUseCasesModule],
  controllers: [GetTapesHttpController],
})
export class TapesInfrastructureModule {}
