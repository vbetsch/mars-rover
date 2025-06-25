import { CardinalPoint } from '@app/domain/CardinalPoint';

export class UnknownDirectionError extends Error {
  public constructor(direction: CardinalPoint.Enum) {
    super(`Unknown direction: ${direction}`);
    this.name = 'UnknownDirectionError';
  }
}
