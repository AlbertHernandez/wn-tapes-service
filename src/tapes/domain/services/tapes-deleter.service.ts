import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TapesDeleterService {
  constructor(private readonly logger: Logger) {}

  delete() {
    this.logger.debug('Running tapes deleter service');

    return {
      name: 'Deleter',
    };
  }
}
