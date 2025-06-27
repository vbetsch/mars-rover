import { Map } from '@app/domain/map';

describe('Map', () => {
  it('Map - should have the size set', () => {
    const height: number = 5;
    const width: number = 4;
    const map: Map.Class = new Map.Class({
      height: height,
      width: width,
    });

    expect(map.height).toBe(height);
    expect(map.width).toBe(width);
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
});
