import { Module } from '@nestjs/common';
import { TapesModule } from './tapes';
import { SharedModule } from './shared';

@Module({
  imports: [SharedModule, TapesModule],
})
export class TapesAppModule {}
