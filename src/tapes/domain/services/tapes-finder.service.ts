import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TapesFinderService {
  constructor(private readonly logger: Logger) {}

  find() {
    this.logger.debug('Running tapes finder service');

    return {
      name: 'Albert',
    };
  }
}
