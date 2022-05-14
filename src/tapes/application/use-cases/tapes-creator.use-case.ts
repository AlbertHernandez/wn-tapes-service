import { Injectable } from '@nestjs/common';
import { TapesCreatorService } from '../../domain';

@Injectable()
export class TapesCreatorUseCase {
  constructor(private readonly tapesCreatorService: TapesCreatorService) {}

  run() {
    return this.tapesCreatorService.create();
  }
}
