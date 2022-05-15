import { Controller, Get, Param } from '@nestjs/common';
import { TAPES_ROUTE } from '../tapes.route';
import { V1 } from '../../../../common';
import { TapesByIdFinderUseCase } from '../../../application/use-cases';

@Controller(`${V1}/${TAPES_ROUTE}`)
export class TapesGetController {
  constructor(private readonly tapesFinderUseCase: TapesByIdFinderUseCase) {}

  @Get(':id')
  async run(@Param('id') id: string) {
    return await this.tapesFinderUseCase.run(id);
  }
}
