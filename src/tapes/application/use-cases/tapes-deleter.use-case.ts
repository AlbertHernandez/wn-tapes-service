import { Injectable } from '@nestjs/common';
import { TapesDeleterService } from '../../domain';

@Injectable()
export class TapesDeleterUseCase {
  constructor(private readonly tapesDeleterService: TapesDeleterService) {}

  run() {
    return this.tapesDeleterService.delete();
  }
}
