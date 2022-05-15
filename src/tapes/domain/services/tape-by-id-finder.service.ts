import { Inject, Injectable, Logger } from '@nestjs/common';
import { TAPE_REPOSITORY, TapeRepository } from '../repositories';
import { Tape, TapeId } from '../entities';
import { TapeNotFoundException } from '../exceptions';

@Injectable()
export class TapeByIdFinderService {
  constructor(
    private readonly logger: Logger,
    @Inject(TAPE_REPOSITORY)
    private readonly tapeRepository: TapeRepository,
  ) {}

  async find(id: TapeId): Promise<Tape> {
    this.logger.debug('Running tapes finder service');

    const tape = await this.tapeRepository.findById(id);

    if (!tape) {
      throw new TapeNotFoundException(id);
    }

    return tape;
  }
}
