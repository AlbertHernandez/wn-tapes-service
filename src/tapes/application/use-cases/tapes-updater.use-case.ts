import { Injectable } from '@nestjs/common';
import { TapesDeleterService } from '../../domain';

@Injectable()
export class TapesUpdaterUseCase {
  constructor(private readonly tapesDeleterService: TapesDeleterService) {}

  run() {
    return this.tapesDeleterService.delete();
  }
}
