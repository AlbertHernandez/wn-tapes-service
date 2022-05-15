import { Module } from '@nestjs/common';
import { CommonModule } from '../common';
import { TAPE_REPOSITORY } from './domain/repositories';
import * as tapesUseCases from './application/use-cases';
import * as tapesServices from './domain/services';
import * as tapesControllers from './infrastructure/http/controllers';
import { InMemoryTapeRepository } from './infrastructure/repositories';

@Module({
  imports: [CommonModule],
  providers: [
    ...Object.values(tapesUseCases),
    ...Object.values(tapesServices),
    {
      provide: TAPE_REPOSITORY,
      useClass: InMemoryTapeRepository,
    },
  ],
  controllers: Object.values(tapesControllers),
})
export class TapesModule {}
