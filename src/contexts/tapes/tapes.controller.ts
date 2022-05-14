import { Controller, Get } from '@nestjs/common';
import { TapesService } from './tapes.service';

@Controller('v1/tapes')
export class TapesController {
  constructor(private readonly tapesService: TapesService) {}

  @Get()
  getHello() {
    return this.tapesService.getHello();
  }
}
