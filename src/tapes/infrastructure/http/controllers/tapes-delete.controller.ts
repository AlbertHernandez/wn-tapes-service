import { Controller, Delete } from '@nestjs/common';
import { TAPES_ROUTE } from '../tapes.route';
import { V1 } from '../../../../common';
import { TapesDeleterUseCase } from '../../../application/use-cases';

@Controller(`${V1}/${TAPES_ROUTE}`)
export class TapesDeleteController {
  constructor(private readonly tapesDeleterUseCase: TapesDeleterUseCase) {}

  @Delete()
  run() {
    return this.tapesDeleterUseCase.run();
  }
}
