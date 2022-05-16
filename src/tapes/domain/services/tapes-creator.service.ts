import { Inject, Injectable, Logger } from '@nestjs/common';
import { Tape } from '../entities';
import { TAPE_REPOSITORY, TapeRepository } from '../repositories';

@Injectable()
export class TapesCreatorService {
  private readonly logger = new Logger(TapesCreatorService.name);
  constructor(
    @Inject(TAPE_REPOSITORY)
    private readonly tapeRepository: TapeRepository,
  ) {}

  async create(tape: Tape) {
    this.logger.debug('Running creator service', tape);
    await this.tapeRepository.create(tape);

    return tape;
  }
}
