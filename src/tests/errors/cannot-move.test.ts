import { CannotMoveError } from '@app/errors/cannot-move.error';
import { MovementPolicy } from '@app/domain/movement-policy';

describe('CannotMoveError', () => {
  it('CannotMoveError - should throw boundary error', () => {
    expect(() => {
      throw new CannotMoveError(MovementPolicy.MoveResultReasonsEnum.BOUNDARY);
    }).toThrow(
      "You cannot move to this position. You've reached the map's limits."
    );
  });
  it('CannotMoveError - should throw obstacle error', () => {
    expect(() => {
      throw new CannotMoveError(MovementPolicy.MoveResultReasonsEnum.OBSTACLE);
    }).toThrow('You cannot move to this position. You encounter an obstacle.');
  });
  it('CannotMoveError - should throw default error', () => {
    expect(() => {
      throw new CannotMoveError();
    }).toThrow('You cannot move to this position.');
  });
});
