import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TapesUpdaterService {
  constructor(private readonly logger: Logger) {}

  update() {
    this.logger.debug('Running tapes updater service');

    return {
      name: 'Updater',
    };
  }
}
