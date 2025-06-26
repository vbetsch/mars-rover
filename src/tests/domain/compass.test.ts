import { CardinalPoint } from '@app/domain/cardinal-point';
import { Compass } from '@app/domain/compass';

describe('Compass', () => {
  it('Compass - should have cardinal points', () => {
    expect(Compass.Instance.cardinalPoints).toStrictEqual(['N', 'E', 'S', 'W']);
  });
  it('Compass - north should have mustIncrementY', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint('N');
    expect(cardinalPoint.mustIncrementY).toBe(true);
  });
});
