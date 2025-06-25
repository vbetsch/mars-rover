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

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to north', () => {
    const direction: DirectionsEnum = DirectionsEnum.NORTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.direction).toStrictEqual(direction);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 2 }));
  });
  it('Rover - should move to east', () => {
    const direction: DirectionsEnum = DirectionsEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.direction).toStrictEqual(direction);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 2, y: 1 }));
  });
  it('Rover - should move to south', () => {
    const direction: DirectionsEnum = DirectionsEnum.SOUTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 0 }));
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to west', () => {
    const direction: DirectionsEnum = DirectionsEnum.WEST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.position).toStrictEqual(new Point.Class({ x: 0, y: 1 }));
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should not move', () => {
    const errorMessage: string = 'Coordinates must be non-negative';

    let rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: DirectionsEnum.SOUTH,
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
    rover = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: DirectionsEnum.WEST,
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
  });
  it('Rover - should turn left - from south to east', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: DirectionsEnum.SOUTH,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(DirectionsEnum.EAST);
  });
  it('Rover - should turn left - from east to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: DirectionsEnum.EAST,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(DirectionsEnum.NORTH);
  });
  it('Rover - should turn left - from north to west', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: DirectionsEnum.NORTH,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(DirectionsEnum.WEST);
  });
  it('Rover - should turn left - from west to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: DirectionsEnum.WEST,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(DirectionsEnum.SOUTH);
  });
});
