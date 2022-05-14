import { Injectable } from '@nestjs/common';

@Injectable()
export class TapesService {
  getHello() {
    return {
      name: 'Albert',
    };
  }
}
