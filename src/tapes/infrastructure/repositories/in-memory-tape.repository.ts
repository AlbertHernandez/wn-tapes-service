import { Tape, TapeId } from '../../domain';
import { TapeRepository } from '../../domain/repositories/tape.repository';

export class InMemoryTapeRepository implements TapeRepository {
  private tapeMemory: Record<TapeId, Tape>;

  constructor() {
    this.tapeMemory = {};
  }

  async create(tape: Tape): Promise<void> {
    this.tapeMemory[tape.id] = tape;
  }

  async deleteById(id: TapeId): Promise<void> {
    this.tapeMemory[id] = undefined;
  }

  async findById(id: TapeId): Promise<Tape | null> {
    return this.tapeMemory[id] || null;
  }

  async update(id: TapeId, tape: Partial<Tape>): Promise<void> {
    this.tapeMemory[id] = {
      ...this.tapeMemory[id],
      ...tape,
    };
  }
}
