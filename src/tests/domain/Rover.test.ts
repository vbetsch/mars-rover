import { Point } from '@app/domain/Point';
import { Rover } from '@app/domain/Rover';
import { DirectionsEnum } from '@app/enums/directions.enum';

describe('Rover', () => {
  it('Rover - should have a starting point and a direction', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const direction: DirectionsEnum = DirectionsEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: direction,
    });

    expect(rover.position).toBe(point);
    expect(rover.direction).toBe(direction);
  });
  it('Rover - should move forward', () => {
    const startingPoint: Point.Class = new Point.Class({ x: 0, y: 0 });
    const direction: DirectionsEnum = DirectionsEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: startingPoint,
      direction: direction,
    });

    rover.moveForward();

    const endPoint: Point.Class = new Point.Class({ x: 1, y: 0 });
    expect(rover.position).toStrictEqual(endPoint);
    expect(rover.direction).toStrictEqual(direction);
  });
});
