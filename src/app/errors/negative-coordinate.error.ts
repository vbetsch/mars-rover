export class NegativeCoordinateError extends Error {
  public constructor() {
    super('Coordinates must be non-negative');
    this.name = 'NegativeCoordinateError';
  }
}
