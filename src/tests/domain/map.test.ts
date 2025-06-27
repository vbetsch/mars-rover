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
});
