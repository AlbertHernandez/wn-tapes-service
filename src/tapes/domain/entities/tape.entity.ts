export type TapeId = string;
export type TapeDuration = number;
export type TapeDescription = string;
export type TapeUpdatedAt = Date;
export type TapeCreatedAt = Date;

export class Tape {
  constructor(
    readonly id: TapeId,
    readonly duration: TapeDuration,
    readonly description: TapeDescription,
    readonly updatedAt: TapeUpdatedAt,
    readonly createdAt: TapeCreatedAt,
  ) {}
}
