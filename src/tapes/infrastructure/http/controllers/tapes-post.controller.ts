import { Controller, Post } from '@nestjs/common';
import { TAPES_ROUTE } from '../tapes.route';
import { V1 } from '../../../../shared/routes/routes.constants';
import { TapesCreatorUseCase } from '../../../application';

@Controller(`${V1}/${TAPES_ROUTE}`)
export class TapesPostController {
  constructor(private readonly tapesCreatorUseCase: TapesCreatorUseCase) {}

  @Post()
  run() {
    return this.tapesCreatorUseCase.run();
  }
}
