import { Point } from '../src/point';

describe('Point', () => {
  it('Point - should have x and y', () => {
    const params: Point.Type = { x: 0, y: 0 };
    const point: Point.Class = new Point.Class(params);

    expect(point.x).toBe(params.x);
    expect(point.y).toBe(params.y);
  });
});
