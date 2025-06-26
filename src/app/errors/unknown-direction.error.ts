export class UnknownDirectionError extends Error {
  public constructor(direction: string) {
    super(`Unknown direction: ${direction}`);
    this.name = 'UnknownDirectionError';
  }
}
