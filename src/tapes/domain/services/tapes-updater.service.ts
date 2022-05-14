import { Injectable } from '@nestjs/common';

@Injectable()
export class TapesUpdaterService {
  update() {
    return {
      name: 'Updater',
    };
  }
}
