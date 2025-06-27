import { Map } from '@app/domain/map';
import { Point } from '@app/domain/point';

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
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
    ]);
  });
  it('Map - should return his matrix - 4x3', () => {
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
    });

    expect(map.matrix).toStrictEqual([
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
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
    const roverPosition: Point.Class = new Point.Class({ x: 2 - 1, y: 3 - 1 });
    const map: Map.Class = new Map.Class({
      height: 4,
      width: 3,
      roverPosition: roverPosition,
    });

    expect(map.roverPosition).toStrictEqual(roverPosition);
    expect(map.matrix).toStrictEqual([
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
      [Map.NOTHING, Map.ROVER, Map.NOTHING],
      [Map.NOTHING, Map.NOTHING, Map.NOTHING],
    ]);
  });
});
