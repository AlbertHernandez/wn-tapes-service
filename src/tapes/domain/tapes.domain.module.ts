import { Logger, Module } from '@nestjs/common';
import * as tapesServices from './services';
import { SharedModule } from '../../shared';

@Module({
  imports: [SharedModule],
  providers: Object.values(tapesServices),
  exports: [
    tapesServices.TapesCreatorService,
    tapesServices.TapesFinderService,
    tapesServices.TapesUpdaterService,
    tapesServices.TapesDeleterService,
  ],
})
export class TapesDomainModule {}
