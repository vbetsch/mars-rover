// import { CardinalPoint } from '@app/domain/cardinal-point';
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
  // it('Compass - north should have mustIncrementY', () => {
  //   const cardinalPoint: CardinalPoint.Class =
  //     Compass.Instance.getCardinalPoint(Compass.Enum.NORTH);
  //   expect(cardinalPoint.mustIncrementY).toBe(true);
  // });
});
