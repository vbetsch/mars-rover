import { Point } from '@app/domain/Point';
import { Rover } from '@app/domain/Rover';

describe('Rover', () => {
  it('Rover - should have a starting point and a direction', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const direction: DirectionEnum = DirectionEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: direction,
    });

    expect(rover.position).toBe(point);
    expect(rover.direction).toBe(direction);
  });
});
