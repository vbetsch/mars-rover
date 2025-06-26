import { Point } from '@app/domain/Point';
import { Rover } from '@app/domain/Rover';
import { CardinalPointsEnum } from '@app/enums/cardinal-points.enum';

describe('Rover', () => {
  it('Rover - should have a starting point and a direction', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const direction: CardinalPointsEnum = CardinalPointsEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: direction,
    });

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to north', () => {
    const direction: CardinalPointsEnum = CardinalPointsEnum.NORTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.direction).toStrictEqual(direction);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 2 }));
  });
  it('Rover - should move to east', () => {
    const direction: CardinalPointsEnum = CardinalPointsEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.direction).toStrictEqual(direction);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 2, y: 1 }));
  });
  it('Rover - should move to south', () => {
    const direction: CardinalPointsEnum = CardinalPointsEnum.SOUTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: direction,
    });

    rover.moveForward();

    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 0 }));
    expect(rover.direction).toStrictEqual(direction);
  });
  it('Rover - should move to west', () => {
    const direction: CardinalPointsEnum = CardinalPointsEnum.WEST;
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
      direction: CardinalPointsEnum.SOUTH,
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
    rover = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: CardinalPointsEnum.WEST,
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
  });
  it('Rover - should turn left - from south to east', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: CardinalPointsEnum.SOUTH,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(CardinalPointsEnum.EAST);
  });
  it('Rover - should turn left - from east to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: CardinalPointsEnum.EAST,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(CardinalPointsEnum.NORTH);
  });
  it('Rover - should turn left - from north to west', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: CardinalPointsEnum.NORTH,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(CardinalPointsEnum.WEST);
  });
  it('Rover - should turn left - from west to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: CardinalPointsEnum.WEST,
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(CardinalPointsEnum.SOUTH);
  });
  it('Rover - should turn right - from south to west', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: CardinalPointsEnum.SOUTH,
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(CardinalPointsEnum.WEST);
  });
  it('Rover - should turn right - from west to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: CardinalPointsEnum.WEST,
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(CardinalPointsEnum.NORTH);
  });
  it('Rover - should turn right - from north to east', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: CardinalPointsEnum.NORTH,
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(CardinalPointsEnum.EAST);
  });
  it('Rover - should turn right - from east to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: CardinalPointsEnum.EAST,
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction).toStrictEqual(CardinalPointsEnum.SOUTH);
  });
});
