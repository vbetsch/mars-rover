import { Point } from '@app/domain/Point';

describe('Rover', () => {
  it('Rover - should have a starting point', () => {
    const startingPoint: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover = new Rover(startingPoint);

    expect(rover.startingPoint).toBe(startingPoint);
  });
});
