import { Body, Controller, Post } from '@nestjs/common';
import { TAPES_ROUTE } from '../tapes.route';
import { V1 } from '../../../../common';
import { TapesCreatorUseCase } from '../../../application';
import { CreateTapeDto } from '../../../application/dto/create-tape.dto';

@Controller(`${V1}/${TAPES_ROUTE}`)
export class TapesPostController {
  constructor(private readonly tapesCreatorUseCase: TapesCreatorUseCase) {}

  @Post()
  run(@Body() createTapeDto: CreateTapeDto) {
    return this.tapesCreatorUseCase.run(createTapeDto);
  }
}
