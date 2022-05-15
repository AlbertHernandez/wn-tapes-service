import { Injectable, Logger } from '@nestjs/common';
import { Tape } from '../entities/tape.entity';

@Injectable()
export class TapesCreatorService {
  constructor(private readonly logger: Logger) {}

  async create(tape: Tape) {
    this.logger.debug('Running creator service', tape);

    return tape;
  }
}
