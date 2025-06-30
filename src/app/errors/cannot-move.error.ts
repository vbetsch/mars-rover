import { MovementPolicy } from '@app/domain/movement-policy';

export class CannotMoveError extends Error {
  public constructor(reason?: MovementPolicy.MoveResultReasons) {
    let errorMessage: string = 'You cannot move to this position.';
    switch (reason) {
      case MovementPolicy.MoveResultReasons.BOUNDARY:
        errorMessage += " You've reached the map's limits.";
        break;
      case MovementPolicy.MoveResultReasons.OBSTACLE:
        errorMessage += ' You encounter an obstacle.';
        break;
      default:
        break;
    }
    super(errorMessage);
    this.name = 'CannotMoveError';
  }
}
