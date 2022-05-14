import { Injectable } from '@nestjs/common';
import { TapesUpdaterService } from '../../domain';

@Injectable()
export class TapesUpdaterUseCase {
  constructor(private readonly tapesUpdaterService: TapesUpdaterService) {}

  run() {
    return this.tapesUpdaterService.update();
  }
}
