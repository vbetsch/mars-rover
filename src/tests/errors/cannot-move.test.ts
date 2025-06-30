import { CannotMoveError } from '@app/errors/cannot-move.error';
import { MovementPolicy } from '@app/domain/movement-policy';

describe('CannotMoveError', () => {
  it('CannotMoveError - should throw boundary error', () => {
    const reason = MovementPolicy.MoveResultReasonsEnum.BOUNDARY;
    const error: CannotMoveError = new CannotMoveError(reason);
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBeInstanceOf('CannotMoveError');
    expect(error.reason).toBe(reason);
    expect(error.message).toBeInstanceOf(
      "You cannot move to this position. You've reached the map's limits."
    );
  });
  it('CannotMoveError - should throw obstacle error', () => {
    const reason = MovementPolicy.MoveResultReasonsEnum.OBSTACLE;
    const error: CannotMoveError = new CannotMoveError(reason);
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBeInstanceOf('CannotMoveError');
    expect(error.reason).toBe(reason);
    expect(error.message).toBeInstanceOf(
      'You cannot move to this position. You encounter an obstacle.'
    );
  });
  it('CannotMoveError - should throw default error', () => {
    const error: CannotMoveError = new CannotMoveError();
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBeInstanceOf('CannotMoveError');
    expect(error.reason).toBeUndefined();
    expect(error.message).toBeInstanceOf('You cannot move to this position.');
  });
});
