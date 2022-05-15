import { Injectable } from '@nestjs/common';
import { Tape } from '../../domain/entities';
import { TapesCreatorService } from '../../domain/services';
import { CreateTapeDto } from '../dto';

@Injectable()
export class TapesCreatorUseCase {
  constructor(private readonly tapesCreatorService: TapesCreatorService) {}

  async run(createTapeDto: CreateTapeDto) {
    const tape = Tape.create(createTapeDto);
    return await this.tapesCreatorService.create(tape);
  }
}
