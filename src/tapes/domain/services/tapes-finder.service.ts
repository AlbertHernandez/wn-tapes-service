import { Injectable } from '@nestjs/common';

@Injectable()
export class TapesFinderService {
  find() {
    return {
      name: 'Albert',
    };
  }
}
