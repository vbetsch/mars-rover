import { NegativeCoordinateError } from '@app/errors/negative-coordinate.error';

describe('NegativeCoordinateError', () => {
  it('NegativeCoordinateError - should throw default error', () => {
    const error: NegativeCoordinateError = new NegativeCoordinateError();
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBeInstanceOf('NegativeCoordinateError');
    expect(error.message).toBeInstanceOf('Coordinates must be non-negative');
  });
});
