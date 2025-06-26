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
  it('Compass - should get the next left cardinal point - from NORTH to WEST', () => {
    const currentCardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.NORTH);
    const expectCardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.WEST);
    expect(
      Compass.Instance.getNextLeftCardinalPoint(currentCardinalPoint)
    ).toStrictEqual(expectCardinalPoint);
  });
  it('Compass - should get the next left cardinal point - from WEST to SOUTH', () => {
    const currentCardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.WEST);
    const expectCardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.SOUTH);
    expect(
      Compass.Instance.getNextLeftCardinalPoint(currentCardinalPoint)
    ).toStrictEqual(expectCardinalPoint);
  });
  it('Compass - should get the next left cardinal point - from SOUTH to EAST', () => {
    const currentCardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.SOUTH);
    const expectCardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.EAST);
    expect(
      Compass.Instance.getNextLeftCardinalPoint(currentCardinalPoint)
    ).toStrictEqual(expectCardinalPoint);
  });
  it('Compass - should get the next left cardinal point - from EAST to NORTH', () => {
    const currentCardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.EAST);
    const expectCardinalPoint: CardinalPoint.Class =
      Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.NORTH);
    expect(
      Compass.Instance.getNextLeftCardinalPoint(currentCardinalPoint)
    ).toStrictEqual(expectCardinalPoint);
  });
  // it('Compass - should get the next right cardinal point - from NORTH to EAST', () => {
  //   const currentCardinalPoint: CardinalPoint.Class =
  //     Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.NORTH);
  //   const expectCardinalPoint: CardinalPoint.Class =
  //     Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.EAST);
  //   expect(
  //     Compass.Instance.getNextRightCardinalPoint(currentCardinalPoint)
  //   ).toStrictEqual(expectCardinalPoint);
  // });
});
