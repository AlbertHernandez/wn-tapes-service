import { Injectable } from '@nestjs/common';
import { TapeByIdFinderService } from '../../domain/services';
import { TapeId } from '../../domain/entities';

@Injectable()
export class TapesByIdFinderUseCase {
  constructor(private readonly tapeByIdFinderService: TapeByIdFinderService) {}

  async run(id: TapeId) {
    return await this.tapeByIdFinderService.find(id);
  }
}
