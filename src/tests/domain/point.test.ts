import { Point } from '@app/domain/point';
import { NegativeCoordinateError } from '@app/errors/negative-coordinate.error';

describe('Point', () => {
  it('Point - should have x and y', () => {
    const params: Point.Params = { x: 0, y: 0 };
    const point: Point.Class = new Point.Class(params);

    expect(point.x).toStrictEqual(params.x);
    expect(point.y).toStrictEqual(params.y);
  });
  it('Point - x and y should be positive', () => {
    expect(() => new Point.Class({ x: -1, y: 0 })).toThrow(
      new NegativeCoordinateError()
    );
    expect(() => new Point.Class({ x: -1, y: 1 })).toThrow(
      new NegativeCoordinateError()
    );
    expect(() => new Point.Class({ x: 0, y: -1 })).toThrow(
      new NegativeCoordinateError()
    );
    expect(() => new Point.Class({ x: 1, y: -1 })).toThrow(
      new NegativeCoordinateError()
    );
    expect(() => new Point.Class({ x: -1, y: -1 })).toThrow(
      new NegativeCoordinateError()
    );
  });
});
