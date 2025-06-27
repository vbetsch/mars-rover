import { Map } from '@app/domain/map';
import { Rover } from '@app/domain/rover';
import { Point } from '@app/domain/point';
import { Compass } from '@app/domain/compass';

describe('Map', () => {
  it('Map - should have the size set and not the rover', () => {
    const height: number = 5;
    const width: number = 4;
    const map: Map.Class = new Map.Class({
      height: height,
      width: width,
    });

    expect(map.height).toBe(height);
    expect(map.width).toBe(width);
    expect(map.rover).toStrictEqual(null);
  });
  it('Map - should return his matrix - 3x3', () => {
    const size: number = 3;
    const map: Map.Class = new Map.Class({
      height: size,
      width: size,
    });

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
  it('Map - can have a Rover', () => {
    const height: number = 5;
    const width: number = 4;
    const rover: Rover.Class = new Rover.Class({
      startingPoint: new Point.Class({ x: 0, y: 0 }),
      direction: Compass.Instance.getCardinalPoint(
        Compass.CardinalPointEnum.EAST
      ),
    });
    const map: Map.Class = new Map.Class({
      height: height,
      width: width,
      rover: rover,
    });

    expect(map.height).toBe(height);
    expect(map.width).toBe(width);
    expect(map.rover).toStrictEqual(rover);
  });
});
