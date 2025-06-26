import { Point } from '@app/domain/point';
import { Rover } from '@app/domain/rover';
import { Compass } from '@app/domain/compass';

describe('Rover', () => {
  it('Rover - should have a starting point and a direction', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const direction: Compass.Enum = Compass.Enum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: direction,
    });

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to north', () => {
    const direction: Compass.Enum = Compass.Enum.NORTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.direction).toStrictEqual(direction);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 2 }));
  });
  it('Rover - should move to east', () => {
    const direction: Compass.Enum = Compass.Enum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.direction).toStrictEqual(direction);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 2, y: 1 }));
  });
  it('Rover - should move to south', () => {
    const direction: Compass.Enum = Compass.Enum.SOUTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 0 }));
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to west', () => {
    const direction: Compass.Enum = Compass.Enum.WEST;
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
      direction: Compass.Enum.SOUTH,
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
    rover = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: Compass.Enum.WEST,
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
  });
  it('Rover - should turn left - from south to east', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Enum.SOUTH,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(Compass.Enum.EAST);
  });
  it('Rover - should turn left - from east to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Enum.EAST,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(Compass.Enum.NORTH);
  });
  it('Rover - should turn left - from north to west', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Enum.NORTH,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(Compass.Enum.WEST);
  });
  it('Rover - should turn left - from west to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Enum.WEST,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(Compass.Enum.SOUTH);
  });
  it('Rover - should turn right - from south to west', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Enum.SOUTH,
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(Compass.Enum.WEST);
  });
  it('Rover - should turn right - from west to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Enum.WEST,
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(Compass.Enum.NORTH);
  });
  it('Rover - should turn right - from north to east', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Enum.NORTH,
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(Compass.Enum.EAST);
  });
  it('Rover - should turn right - from east to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Enum.EAST,
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(Compass.Enum.SOUTH);
  });
});
