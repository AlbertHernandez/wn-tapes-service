import { Controller, Get } from '@nestjs/common';
import { TapesService } from './tapes.service';
import { tapesRoute } from './tapes.route';

@Controller(`${tapesRoute.version}/${tapesRoute.root}`)
export class GetTapesHttpController {
  constructor(private readonly tapesService: TapesService) {}

  @Get()
  run() {
    return this.tapesService.getHello();
  }
}
