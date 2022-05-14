import { Controller, Get } from '@nestjs/common';
import { TapesService } from './tapes.service';
import { TAPES } from './tapes.route';
import { V1 } from 'src/shared/routes/routes.constants';

@Controller(`${V1}/${TAPES}`)
export class GetTapesHttpController {
  constructor(private readonly tapesService: TapesService) {}

  @Get()
  run() {
    return this.tapesService.getHello();
  }
}
