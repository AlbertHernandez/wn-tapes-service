import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TapesDeleterService {
  private readonly logger = new Logger(TapesDeleterService.name);

  async delete() {
    this.logger.debug('Running tapes deleter service');

    return {
      name: 'Deleter',
    };
  }
}
