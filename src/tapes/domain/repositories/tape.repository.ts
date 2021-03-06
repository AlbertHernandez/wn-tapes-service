import { Tape, TapeId } from '../entities';

export const TAPE_REPOSITORY = 'TapeRepository';

export interface TapeRepository {
  create(tape: Tape): Promise<void>;
  findById(id: TapeId): Promise<Tape | null>;
  deleteById(id: TapeId): Promise<void>;
  update(id: TapeId, tape: Partial<Tape>): Promise<void>;
}
