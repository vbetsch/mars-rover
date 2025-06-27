import { Map } from '@app/domain/map';
import { Point } from '@app/domain/point';

describe('Map', () => {
  it('Map - should have the size set and not the rover position or obstacles', () => {
    const height: number = 5;
    const width: number = 4;
    const map: Map.Class = new Map.Class({
      height: height,
      width: width,
    });

    expect(map.height).toBe(height);
    expect(map.width).toBe(width);
    expect(map.roverPosition).toStrictEqual(null);
    expect(map.obstaclesPositions).toStrictEqual(null);
  });
  it('Map - should return his matrix - 3x3', () => {
    const size: number = 3;
    const map: Map.Class = new Map.Class({
      height: size,
      width: size,
    });

    expect(map.height).toBe(size);
    expect(map.width).toBe(size);
    expect(map.matrix).toStrictEqual([
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
    ]);
  });
  it('Map - should return his matrix - 4x3', () => {
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
    });

    expect(map.matrix).toStrictEqual([
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
    ]);
  });
  it('Map - can have a Rover position', () => {
    const height: number = 5;
    const width: number = 4;
    const roverPosition: Point.Class = new Point.Class({ x: 0, y: 0 });
    const map: Map.Class = new Map.Class({
      height: height,
      width: width,
      roverPosition: roverPosition,
    });

    expect(map.height).toBe(height);
    expect(map.width).toBe(width);
    expect(map.roverPosition).toStrictEqual(roverPosition);
  });
  it('Map - should return his matrix with a Rover', () => {
    const roverPosition: Point.Class = new Point.Class({ x: 2, y: 3 });
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
      roverPosition: roverPosition,
    });

    expect(map.roverPosition).toStrictEqual(roverPosition);
    expect(map.matrix).toStrictEqual([
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.ROVER, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
    ]);
  });
  it('Map - should be able to change rover position', () => {
    const roverPositionA: Point.Class = new Point.Class({ x: 2, y: 3 });
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
      roverPosition: roverPositionA,
    });

    expect(map.roverPosition).toStrictEqual(roverPositionA);

    const roverPositionB: Point.Class = new Point.Class({ x: 3, y: 3 });
    map.roverPosition = roverPositionB;
    expect(map.roverPosition).toStrictEqual(roverPositionB);
  });
  it('Map - should compute matrix for each position change', () => {
    const roverPositionA: Point.Class = new Point.Class({ x: 2, y: 3 });
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
      roverPosition: roverPositionA,
    });

    expect(map.roverPosition).toStrictEqual(roverPositionA);
    expect(map.matrix).toStrictEqual([
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.ROVER, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
    ]);

    const roverPositionB: Point.Class = new Point.Class({ x: 3, y: 3 });
    map.roverPosition = roverPositionB;
    expect(map.roverPosition).toStrictEqual(roverPositionB);
    expect(map.matrix).toStrictEqual([
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.ROVER],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
    ]);
  });
  it('Map - can have obstacles positions', () => {
    const size: number = 5;
    const obstaclesPositions: Point.Class[] = [
      new Point.Class({ x: 1, y: 3 }),
      new Point.Class({ x: 2, y: 3 }),
      new Point.Class({ x: 3, y: 3 }),
    ];
    const map: Map.Class = new Map.Class({
      height: size,
      width: size,
      obstaclesPositions: obstaclesPositions,
    });

    expect(map.height).toBe(size);
    expect(map.width).toBe(size);
    expect(map.obstaclesPositions).toStrictEqual(obstaclesPositions);
  });
  it('Map - should return his matrix with rover and obstacles', () => {
    const roverPosition: Point.Class = new Point.Class({ x: 1, y: 1 });
    const obstaclesPositions: Point.Class[] = [
      new Point.Class({ x: 1, y: 3 }),
      new Point.Class({ x: 2, y: 3 }),
      new Point.Class({ x: 2, y: 2 }),
    ];
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
      roverPosition: roverPosition,
      obstaclesPositions: obstaclesPositions,
    });

    expect(map.obstaclesPositions).toStrictEqual(obstaclesPositions);
    expect(map.matrix).toStrictEqual([
      [Map.Values.ROVER, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.OBSTACLE, Map.Values.NOTHING],
      [Map.Values.OBSTACLE, Map.Values.OBSTACLE, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
    ]);
  });
  it('Map - should be able to change obstacles positions', () => {
    const obstaclesPositionsA: Point.Class[] = [
      new Point.Class({ x: 1, y: 3 }),
      new Point.Class({ x: 2, y: 3 }),
      new Point.Class({ x: 2, y: 2 }),
    ];
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
      obstaclesPositions: obstaclesPositionsA,
    });

    expect(map.obstaclesPositions).toStrictEqual(obstaclesPositionsA);

    const obstaclesPositionsB: Point.Class[] = [
      new Point.Class({ x: 3, y: 3 }),
      new Point.Class({ x: 1, y: 3 }),
      new Point.Class({ x: 3, y: 2 }),
    ];
    map.obstaclesPositions = obstaclesPositionsB;
    expect(map.obstaclesPositions).toStrictEqual(obstaclesPositionsB);
  });
  it('Map - should compute matrix for each obstacles change', () => {
    const obstaclesPositionsA: Point.Class[] = [
      new Point.Class({ x: 1, y: 3 }),
      new Point.Class({ x: 2, y: 3 }),
      new Point.Class({ x: 2, y: 2 }),
    ];
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
      obstaclesPositions: obstaclesPositionsA,
    });

    expect(map.obstaclesPositions).toStrictEqual(obstaclesPositionsA);
    expect(map.matrix).toStrictEqual([
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.OBSTACLE, Map.Values.NOTHING],
      [Map.Values.OBSTACLE, Map.Values.OBSTACLE, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
    ]);

    const obstaclesPositionsB: Point.Class[] = [
      new Point.Class({ x: 3, y: 3 }),
      new Point.Class({ x: 1, y: 3 }),
      new Point.Class({ x: 3, y: 2 }),
    ];
    map.obstaclesPositions = obstaclesPositionsB;
    expect(map.obstaclesPositions).toStrictEqual(obstaclesPositionsB);
    expect(map.matrix).toStrictEqual([
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.OBSTACLE],
      [Map.Values.OBSTACLE, Map.Values.NOTHING, Map.Values.OBSTACLE],
      [Map.Values.NOTHING, Map.Values.NOTHING, Map.Values.NOTHING],
    ]);
  });
});
