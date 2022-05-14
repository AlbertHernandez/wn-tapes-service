import { Injectable } from '@nestjs/common';

@Injectable()
export class TapesCreator {
  getHello() {
    return {
      name: 'Albert',
    };
  }
}
