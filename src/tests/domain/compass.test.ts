import { CardinalPoint } from '@app/domain/cardinal-point';
import { Compass } from '@app/domain/compass';

describe('Compass', () => {
  it('Compass - should have cardinal points', () => {
    expect(Compass.Instance.cardinalPoints).toStrictEqual([
      Compass.CardinalPointEnum.NORTH,
      Compass.CardinalPointEnum.EAST,
      Compass.CardinalPointEnum.SOUTH,
      Compass.CardinalPointEnum.WEST,
    ]);
  });
  it('Compass - north should increment Y', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.NORTH);
    expect(cardinalPoint.mustIncrementY).toBe(true);
  });
  it('Compass - east should increment X', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.EAST);
    expect(cardinalPoint.mustIncrementX).toBe(true);
  });
  it('Compass - south should decrement Y', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.SOUTH);
    expect(cardinalPoint.mustDecrementY).toBe(true);
  });
  it('Compass - west should decrement X', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.WEST);
    expect(cardinalPoint.mustDecrementX).toBe(true);
  });
});
