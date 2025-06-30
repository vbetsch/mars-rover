import { Point } from '@app/domain/point';
import { Rover } from '@app/domain/rover';
import { Compass } from '@app/domain/compass';
import { MovementPolicy } from '@app/domain/movement-policy';
import { Map } from '@app/domain/map';

describe('Rover', () => {
  it('Rover - should have a starting point and a direction', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const cardinalPointValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Instance.getCardinalPoint(cardinalPointValue),
    });

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(cardinalPointValue);
  });
  it('Rover - should move to north', () => {
    const cardinalPointValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.NORTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: Compass.Instance.getCardinalPoint(cardinalPointValue),
    });

    rover.moveForward();

    expect(rover.direction.value).toStrictEqual(cardinalPointValue);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 2 }));
  });
  it('Rover - should move to east', () => {
    const cardinalPointValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.EAST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: Compass.Instance.getCardinalPoint(cardinalPointValue),
    });

    rover.moveForward();

    expect(rover.direction.value).toStrictEqual(cardinalPointValue);
    expect(rover.position).toStrictEqual(new Point.Class({ x: 2, y: 1 }));
  });
  it('Rover - should move to south', () => {
    const cardinalPointValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.SOUTH;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: Compass.Instance.getCardinalPoint(cardinalPointValue),
    });

    rover.moveForward();

    expect(rover.position).toStrictEqual(new Point.Class({ x: 1, y: 0 }));
    expect(rover.direction.value).toStrictEqual(cardinalPointValue);
  });
  it('Rover - should move to west', () => {
    const cardinalPointValue: Compass.CardinalPointEnum =
      Compass.CardinalPointEnum.WEST;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 1, y: 1 }),
      direction: Compass.Instance.getCardinalPoint(cardinalPointValue),
    });

    rover.moveForward();

    expect(rover.position).toStrictEqual(new Point.Class({ x: 0, y: 1 }));
    expect(rover.direction.value).toStrictEqual(cardinalPointValue);
  });
  it('Rover - should not move - negative coordinates', () => {
    const errorMessage: string = 'Coordinates must be non-negative';

    let rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.SOUTH
      ),
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
    rover = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.WEST
      ),
    });
    expect(() => rover.moveForward()).toThrow(errorMessage);
  });
  it('Rover - should not move - outside borders - x', () => {
    const rover: Rover.Class = new Rover.Class({
      movementPolicy: new MovementPolicy.Class({
        map: new Map.Class({
          height: 3,
          width: 3,
        }),
      }),
      startingPoint: new Point.Class({ x: 3, y: 3 }),
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.EAST
      ),
    });
    expect(() => rover.moveForward()).toThrow(
      MovementPolicy.MoveResultReasons.BOUNDARY
    );
  });
  it('Rover - should not move - outside borders - y', () => {
    const rover = new Rover.Class({
      movementPolicy: new MovementPolicy.Class({
        map: new Map.Class({
          height: 3,
          width: 3,
        }),
      }),
      startingPoint: new Point.Class({ x: 3, y: 3 }),
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.NORTH
      ),
    });
    expect(() => rover.moveForward()).toThrow(
      MovementPolicy.MoveResultReasons.BOUNDARY
    );
  });
  it('Rover - should not move - on a obstacle', () => {
    const rover = new Rover.Class({
      movementPolicy: new MovementPolicy.Class({
        map: new Map.Class({
          height: 3,
          width: 3,
          obstaclesPositions: [new Point.Class({ x: 2, y: 2 })],
        }),
      }),
      startingPoint: new Point.Class({ x: 2, y: 1 }),
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.NORTH
      ),
    });
    expect(() => rover.moveForward()).toThrow(
      MovementPolicy.MoveResultReasons.BOUNDARY
    );
  });
  it('Rover - should turn left - from south to east', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.SOUTH
      ),
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(Compass.CardinalPointEnum.EAST);
  });
  it('Rover - should turn left - from east to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.EAST
      ),
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
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.NORTH
      ),
    });

    rover.turnLeft();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(Compass.CardinalPointEnum.WEST);
  });
  it('Rover - should turn left - from west to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.WEST
      ),
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
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.SOUTH
      ),
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(Compass.CardinalPointEnum.WEST);
  });
  it('Rover - should turn right - from west to north', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.WEST
      ),
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
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.NORTH
      ),
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(Compass.CardinalPointEnum.EAST);
  });
  it('Rover - should turn right - from east to south', () => {
    const point: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({
      startingPoint: point,
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.EAST
      ),
    });

    rover.turnRight();

    expect(rover.position).toStrictEqual(point);
    expect(rover.direction.value).toStrictEqual(
      Compass.CardinalPointEnum.SOUTH
    );
  });
});
