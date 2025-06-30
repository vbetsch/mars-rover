import { NegativeCoordinateError } from '@app/errors/negative-coordinate.error';

describe('NegativeCoordinateError', () => {
  it('NegativeCoordinateError - should throw default error', () => {
    expect(() => {
      throw new NegativeCoordinateError();
    }).toThrow('Coordinates must be non-negative');
  });
});
