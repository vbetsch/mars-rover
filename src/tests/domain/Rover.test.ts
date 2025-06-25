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
    const startingPoint: Point.Class = new Point.Class({ x: 1, y: 1 });
    const direction: DirectionsEnum = DirectionsEnum.NORTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: startingPoint,
      direction: direction,
    });

    rover.moveForward();

    const endPoint: Point.Class = new Point.Class({ x: 1, y: 2 });
    expect(rover.position).toStrictEqual(endPoint);
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to east', () => {
    const startingPoint: Point.Class = new Point.Class({ x: 1, y: 1 });
    const direction: DirectionsEnum = DirectionsEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: startingPoint,
      direction: direction,
    });

    rover.moveForward();

    const endPoint: Point.Class = new Point.Class({ x: 2, y: 1 });
    expect(rover.position).toStrictEqual(endPoint);
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to south', () => {
    const startingPoint: Point.Class = new Point.Class({ x: 1, y: 1 });
    const direction: DirectionsEnum = DirectionsEnum.SOUTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: startingPoint,
      direction: direction,
    });

    rover.moveForward();

    const endPoint: Point.Class = new Point.Class({ x: 1, y: 0 });
    expect(rover.position).toStrictEqual(endPoint);
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to west', () => {
    const startingPoint: Point.Class = new Point.Class({ x: 1, y: 1 });
    const direction: DirectionsEnum = DirectionsEnum.WEST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: startingPoint,
      direction: direction,
    });

    rover.moveForward();

    const endPoint: Point.Class = new Point.Class({ x: 0, y: 1 });
    expect(rover.position).toStrictEqual(endPoint);
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
});
