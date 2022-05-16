import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TapesUpdaterService {
  private readonly logger = new Logger(TapesUpdaterService.name);

  async update() {
    this.logger.debug('Running tapes updater service');

    return {
      name: 'Updater',
    };
  }
}
