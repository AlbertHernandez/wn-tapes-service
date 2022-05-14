import { Injectable } from '@nestjs/common';
import { TapesFinderService } from '../../domain';

@Injectable()
export class TapesFinderUseCase {
  constructor(private readonly tapesFinderService: TapesFinderService) {}

  run() {
    return this.tapesFinderService.find();
  }
}
