import { NotFoundException } from '@nestjs/common';

export class TapeNotFoundException extends NotFoundException {
  constructor(id: string) {
    super({
      message: 'Tape not found',
      context: {
        id,
      },
    });
  }
}
