import { Compass } from '@app/domain/compass';

export class UnknownDirectionError extends Error {
  public constructor(direction: Compass.CardinalPointEnum) {
    super(`Unknown direction: ${direction}`);
    this.name = 'UnknownDirectionError';
  }
}
