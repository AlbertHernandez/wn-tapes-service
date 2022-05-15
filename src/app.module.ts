import { Module } from '@nestjs/common';
import { TapesModule } from './tapes';
import { CommonModule } from './common';

@Module({
  imports: [CommonModule, TapesModule],
})
export class AppModule {}
