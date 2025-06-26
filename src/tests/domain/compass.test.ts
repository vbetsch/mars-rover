import { CardinalPoint } from '@app/domain/cardinal-point';
import { Compass } from '@app/domain/compass';

describe('Compass', () => {
  it('Compass - should have cardinal points', () => {
    expect(Compass.Instance.cardinalPoints).toStrictEqual([
      Compass.Enum.NORTH,
      Compass.Enum.EAST,
      Compass.Enum.SOUTH,
      Compass.Enum.WEST,
    ]);
  });
  it('Compass - north should increment Y', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.Enum.NORTH);
    expect(cardinalPoint.mustIncrementY).toBe(true);
  });
  it('Compass - east should increment X', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.Enum.EAST);
    expect(cardinalPoint.mustIncrementX).toBe(true);
  });
  it('Compass - south should decrement Y', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.Enum.SOUTH);
    expect(cardinalPoint.mustDecrementY).toBe(true);
  });
  it('Compass - west should decrement X', () => {
    const cardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.Enum.WEST);
    expect(cardinalPoint.mustDecrementX).toBe(true);
  });
});
