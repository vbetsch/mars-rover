import { CardinalPointsEnum } from '@app/enums/cardinal-points.enum';

export class UnknownDirectionError extends Error {
  public constructor(direction: CardinalPointsEnum) {
    super(`Unknown direction: ${direction}`);
    this.name = 'UnknownDirectionError';
  }
}
