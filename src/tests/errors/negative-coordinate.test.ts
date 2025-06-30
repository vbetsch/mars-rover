import { NegativeCoordinateError } from '@app/errors/negative-coordinate.error';

describe('NegativeCoordinateError', () => {
  it('NegativeCoordinateError - should throw default error', () => {
    const error: NegativeCoordinateError = new NegativeCoordinateError();
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('NegativeCoordinateError');
    expect(error.message).toBe('Coordinates must be non-negative');
  });
});
