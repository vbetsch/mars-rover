import { MovementPolicy } from '@app/domain/movement-policy';

export class CannotMoveError extends Error {
  public constructor(reason?: MovementPolicy.MoveResultReasonsEnum) {
    let errorMessage: string = 'You cannot move to this position.';
    switch (reason) {
      case MovementPolicy.MoveResultReasonsEnum.BOUNDARY:
        errorMessage += " You've reached the map's limits.";
        break;
      case MovementPolicy.MoveResultReasonsEnum.OBSTACLE:
        errorMessage += ' You encounter an obstacle.';
        break;
    }
    super(errorMessage);
    this.name = 'CannotMoveError';
  }
}
