import { Inject, Injectable, Logger } from '@nestjs/common';
import { Tape } from '../entities';
import { TAPE_REPOSITORY, TapeRepository } from '../repositories';

@Injectable()
export class TapesCreatorService {
  constructor(
    private readonly logger: Logger,
    @Inject(TAPE_REPOSITORY)
    private readonly tapeRepository: TapeRepository,
  ) {}

  async create(tape: Tape) {
    this.logger.debug('Running creator service', tape);
    await this.tapeRepository.create(tape);

    return tape;
  }
}
