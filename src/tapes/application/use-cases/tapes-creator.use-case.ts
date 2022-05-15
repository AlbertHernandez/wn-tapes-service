import { Injectable } from '@nestjs/common';
import { Tape, TapesCreatorService } from '../../domain';
import { CreateTapeDto } from '../dto/create-tape.dto';

@Injectable()
export class TapesCreatorUseCase {
  constructor(private readonly tapesCreatorService: TapesCreatorService) {}

  async run(createTapeDto: CreateTapeDto) {
    const tape = Tape.create(createTapeDto);
    return await this.tapesCreatorService.create(tape);
  }
}
