import { Injectable } from '@nestjs/common';
import { TapesUpdaterService } from '../../domain/services';

@Injectable()
export class TapesUpdaterUseCase {
  constructor(private readonly tapesUpdaterService: TapesUpdaterService) {}

  async run() {
    return await this.tapesUpdaterService.update();
  }
}
