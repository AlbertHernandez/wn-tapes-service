import { Injectable } from '@nestjs/common';
import { TapesFinderService } from '../../domain/services';

@Injectable()
export class TapesFinderUseCase {
  constructor(private readonly tapesFinderService: TapesFinderService) {}

  async run() {
    return await this.tapesFinderService.find();
  }
}
