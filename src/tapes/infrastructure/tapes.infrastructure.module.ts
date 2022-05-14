import { Module } from '@nestjs/common';
import { TapesUseCasesModule } from '../application';
import * as tapesControllers from './http/controllers';

@Module({
  imports: [TapesUseCasesModule],
  controllers: Object.values(tapesControllers),
})
export class TapesInfrastructureModule {}
