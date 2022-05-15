import { Injectable } from '@nestjs/common';
import { TapesDeleterService } from '../../domain/services';

@Injectable()
export class TapesDeleterUseCase {
  constructor(private readonly tapesDeleterService: TapesDeleterService) {}

  async run() {
    return await this.tapesDeleterService.delete();
  }
}
