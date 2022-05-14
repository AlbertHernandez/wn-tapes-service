import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TapesCreatorService {
  constructor(private readonly logger: Logger) {}

  create() {
    this.logger.debug('Running creator service');

    return {
      name: 'Albert',
    };
  }
}
