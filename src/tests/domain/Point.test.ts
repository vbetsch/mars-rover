import { Point } from '@app/domain/Point';

describe('Point', () => {
  it('Point - should have x and y', () => {
    const params: Point.Type = { x: 0, y: 0 };
    const point: Point.Class = new Point.Class(params);

    expect(point.x).toBe(params.x);
    expect(point.y).toBe(params.y);
  });
  it('Point - x and y should be positive', () => {
    expect(() => new Point.Class({ x: -1, y: 0 })).toThrow(
      'x cannot be negative'
    );
    expect(() => new Point.Class({ x: -1, y: 1 })).toThrow(
      'x cannot be negative'
    );
    expect(() => new Point.Class({ x: 0, y: -1 })).toThrow(
      'y cannot be negative'
    );
    expect(() => new Point.Class({ x: 1, y: -1 })).toThrow(
      'y cannot be negative'
    );
    expect(() => new Point.Class({ x: -1, y: -1 })).toThrow(
      'x cannot be negative'
    );
  });
});
