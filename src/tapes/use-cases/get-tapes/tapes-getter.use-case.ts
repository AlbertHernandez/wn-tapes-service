import { Injectable } from '@nestjs/common';
import { TapesCreator } from '../../domain/tapes-creator.service';

@Injectable()
export class TapesGetter {
  constructor(private readonly tapesCreator: TapesCreator) {}

  run() {
    return this.tapesCreator.getHello();
  }
}
