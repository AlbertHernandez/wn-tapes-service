import { IsDate, IsInt, IsString } from 'class-validator';

export type TapeId = string;
export type TapeDuration = number;
export type TapeDescription = string;
export type TapeUpdatedAt = Date;
export type TapeCreatedAt = Date;

export class Tape {
  @IsString()
  id: TapeId;

  @IsInt()
  duration: TapeDuration;

  @IsString()
  description: TapeDescription;

  @IsDate()
  updatedAt: TapeUpdatedAt;

  @IsDate()
  createdAt: TapeCreatedAt;

  static create(payload: {
    id: TapeId;
    duration: TapeDuration;
    description: TapeDescription;
  }): Tape {
    const tape = new Tape();
    const now = new Date();

    tape.id = payload.id;
    tape.duration = payload.duration;
    tape.description = payload.description;
    tape.updatedAt = now;
    tape.createdAt = now;

    return tape;
  }
}
