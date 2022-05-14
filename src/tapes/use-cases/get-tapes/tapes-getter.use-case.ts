import { Injectable } from '@nestjs/common';
import { TapesService } from '../../domain/tapes.service';

@Injectable()
export class TapesGetter {
  constructor(private readonly tapesService: TapesService) {}

  run() {
    return this.tapesService.getHello();
  }
}
