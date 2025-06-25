import { Point } from '@app/domain/Point';
import { Rover } from '@app/domain/Rover';

describe('Rover', () => {
  it('Rover - should have a starting point', () => {
    const startingPoint: Point.Class = new Point.Class({ x: 0, y: 0 });
    const rover: Rover.Class = new Rover.Class({ point: startingPoint });

    expect(rover.position).toBe(startingPoint);
  });
});
