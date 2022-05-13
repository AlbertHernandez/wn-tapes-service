import { Injectable } from '@nestjs/common';

@Injectable()
export class TapesService {
  getHello(): string {
    return 'Hello World!';
  }
}
