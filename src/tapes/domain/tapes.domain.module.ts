import { Module } from '@nestjs/common';
import * as tapesServices from './services';
import { CommonModule } from '../../common';

@Module({
  imports: [CommonModule],
  providers: Object.values(tapesServices),
  exports: [
    tapesServices.TapesCreatorService,
    tapesServices.TapesFinderService,
    tapesServices.TapesUpdaterService,
    tapesServices.TapesDeleterService,
  ],
})
export class TapesDomainModule {}
