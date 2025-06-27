import { Map } from '@app/domain/map';
import { Point } from '@app/domain/point';
import { Obstacle } from '@app/domain/obstacle';

describe('Map', () => {
  it('Map - should have the size set and not the rover position', () => {
    const height: number = 5;
    const width: number = 4;
    const map: Map.Class = new Map.Class({
      height: height,
      width: width,
    });

    expect(map.height).toBe(height);
    expect(map.width).toBe(width);
    expect(map.roverPosition).toStrictEqual(null);
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
  it('Map - can have obstacles', () => {
    const size: number = 5;
    const obstacles: Obstacle.Class[] = [
      new Obstacle.Class({
        position: new Point.Class({ x: 2, y: 3 }),
      }),
    ];
    const map: Map.Class = new Map.Class({
      height: size,
      width: size,
      obstacles: obstacles,
    });

    expect(map.height).toBe(size);
    expect(map.width).toBe(size);
    expect(map.obstacles).toStrictEqual(obstacles);
  });
});
