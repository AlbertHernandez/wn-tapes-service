import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TapesDeleterService {
  constructor(private readonly logger: Logger) {}

  async delete() {
    this.logger.debug('Running tapes deleter service');

    return {
      name: 'Deleter',
    };
  }
}
