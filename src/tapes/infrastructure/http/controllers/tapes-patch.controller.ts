import { Controller, Patch } from '@nestjs/common';
import { TAPES_ROUTE } from '../tapes.route';
import { V1 } from '../../../../shared/routes/routes.constants';
import { TapesUpdaterUseCase } from '../../../application/use-cases';

@Controller(`${V1}/${TAPES_ROUTE}`)
export class TapesPatchController {
  constructor(private readonly tapesUpdaterUseCase: TapesUpdaterUseCase) {}

  @Patch()
  run() {
    return this.tapesUpdaterUseCase.run();
  }
}
