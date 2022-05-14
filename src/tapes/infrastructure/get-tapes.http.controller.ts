import { Controller, Get } from '@nestjs/common';
import { TAPES } from './tapes.route';
import { V1 } from 'src/shared/routes/routes.constants';
import { TapesGetter } from '../use-cases/get-tapes/tapes-getter.use-case';

@Controller(`${V1}/${TAPES}`)
export class GetTapesHttpController {
  constructor(private readonly tapesGetter: TapesGetter) {}

  @Get()
  run() {
    return this.tapesGetter.run();
  }
}
