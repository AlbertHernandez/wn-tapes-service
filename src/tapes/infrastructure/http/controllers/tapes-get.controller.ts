import { Controller, Get } from '@nestjs/common';
import { TAPES_ROUTE } from '../tapes.route';
import { V1 } from '../../../../common';
import { TapesFinderUseCase } from '../../../application/use-cases';

@Controller(`${V1}/${TAPES_ROUTE}`)
export class TapesGetController {
  constructor(private readonly tapesFinderUseCase: TapesFinderUseCase) {}

  @Get()
  run() {
    return this.tapesFinderUseCase.run();
  }
}
