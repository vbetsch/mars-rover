import { Point } from '@app/domain/point';
import { Obstacle } from '@app/domain/obstacle';

describe('Obstacle', () => {
  it('Obstacle - should have a position', () => {
    const position: Point.Class = new Point.Class({ x: 0, y: 0 });
    const obstacle: Obstacle.Class = new Obstacle.Class({
      position: position,
    });

    expect(obstacle.position).toStrictEqual(position);
  });
});
