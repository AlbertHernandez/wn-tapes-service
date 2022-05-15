import { Injectable } from '@nestjs/common';
import { TapesDeleterService } from '../../domain';

@Injectable()
export class TapesDeleterUseCase {
  constructor(private readonly tapesDeleterService: TapesDeleterService) {}

  async run() {
    return await this.tapesDeleterService.delete();
  }
}
