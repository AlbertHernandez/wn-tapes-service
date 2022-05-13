import { Controller, Get } from '@nestjs/common';
import { TapesService } from './tapes.service';

@Controller()
export class TapesController {
  constructor(private readonly tapesService: TapesService) {}

  @Get()
  getHello(): string {
    return this.tapesService.getHello();
  }
}
