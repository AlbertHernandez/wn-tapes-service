import { Injectable } from '@nestjs/common';

@Injectable()
export class TapesCreatorService {
  create() {
    return {
      name: 'Albert',
    };
  }
}
