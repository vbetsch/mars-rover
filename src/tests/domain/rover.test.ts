import { Point } from '@app/domain/point';
import { Rover } from '@app/domain/rover';
import { Compass } from '@app/domain/compass';
import { CardinalPoint } from '@app/domain/cardinal-point';

describe('Rover', () => {
  it('Rover - should have a starting point and a direction', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const cardinalPointValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.EAST;
    const direction: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(cardinalPointValue);
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: direction,
    });

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(cardinalPointValue);
  });
  it('Rover - should move to north', () => {
    const directionValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.NORTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: new CardinalPoint.Class({
        value: directionValue,
        mustIncrementY: true,
      }),
    });

    rover.moveForward();

    expect(rover.direction.value).toStrictEqual(directionValue);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 2 }));
  });
  it('Rover - should move to east', () => {
    const directionValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: new CardinalPoint.Class({
        value: directionValue,
        mustIncrementX: true,
      }),
    });

    rover.moveForward();

    expect(rover.direction.value).toStrictEqual(directionValue);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 2, y: 1 }));
  });
  it('Rover - should move to south', () => {
    const directionValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.SOUTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: new CardinalPoint.Class({
        value: directionValue,
        mustDecrementY: true,
      }),
    });

    rover.moveForward();

    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 0 }));
    expect(rover.direction.value).toStrictEqual(directionValue);
  });
  it('Rover - should move to west', () => {
    const directionValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.WEST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: new CardinalPoint.Class({
        value: directionValue,
        mustDecrementX: true,
      }),
    });

    rover.moveForward();

    expect(rover.position).toStrictEqual(new Point.Class({ x: 0, y: 1 }));
    expect(rover.direction.value).toStrictEqual(directionValue);
  });
  it('Rover - should not move', () => {
    const errorMessage: string = 'Coordinates must be non-negative';

    let rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.SOUTH,
        mustDecrementY: true,
      }),
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
    rover = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.WEST,
        mustDecrementX: true,
      }),
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
  });
  it('Rover - should turn left - from south to east', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.SOUTH,
      }),
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(Compass.CardinalPointEnum.EAST);
  });
  it('Rover - should turn left - from east to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.EAST,
      }),
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(
      Compass.CardinalPointEnum.NORTH
    );
  });
  it('Rover - should turn left - from north to west', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.NORTH,
      }),
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(Compass.CardinalPointEnum.WEST);
  });
  it('Rover - should turn left - from west to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.WEST,
      }),
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(
      Compass.CardinalPointEnum.SOUTH
    );
  });
  it('Rover - should turn right - from south to west', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.SOUTH,
      }),
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(Compass.CardinalPointEnum.WEST);
  });
  it('Rover - should turn right - from west to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.WEST,
      }),
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(
      Compass.CardinalPointEnum.NORTH
    );
  });
  it('Rover - should turn right - from north to east', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.NORTH,
      }),
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(Compass.CardinalPointEnum.EAST);
  });
  it('Rover - should turn right - from east to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: new CardinalPoint.Class({
        value: Compass.CardinalPointEnum.EAST,
      }),
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(
      Compass.CardinalPointEnum.SOUTH
    );
  });
});
