import { Injectable } from '@nestjs/common';

@Injectable()
export class TapesDeleterService {
  delete() {
    return {
      name: 'Deleter',
    };
  }
}
