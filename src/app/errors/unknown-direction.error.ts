import { DirectionsEnum } from '@app/enums/directions.enum';

export class UnknownDirectionError extends Error {
  public constructor(direction: DirectionsEnum) {
    super(`Unknown direction: ${direction}`);
    this.name = 'UnknownDirectionError';
  }
}
