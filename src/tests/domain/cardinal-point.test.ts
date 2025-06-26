import { CardinalPoint } from '@app/domain/cardinal-point';

describe('CardinalPoint', () => {
  it('CardinalPoint - should have a value and have false in optional properties', () => {
    const cardinalPoint: CardinalPoint.Class = new CardinalPoint.Class({
      value: 'NORTH',
    });

    expect(cardinalPoint.value).toStrictEqual('NORTH');
    expect(cardinalPoint.mustIncrementX).toStrictEqual(false);
    expect(cardinalPoint.mustDecrementX).toStrictEqual(false);
    expect(cardinalPoint.mustIncrementY).toStrictEqual(false);
    // expect(cardinalPoint.mustDecrementY).toStrictEqual(false);
  });
  it('CardinalPoint - can have mustIncrementX', () => {
    const cardinalPoint: CardinalPoint.Class = new CardinalPoint.Class({
      value: 'EAST',
      mustIncrementX: true,
    });

    expect(cardinalPoint.value).toStrictEqual('EAST');
    expect(cardinalPoint.mustIncrementX).toStrictEqual(true);
  });
  it('CardinalPoint - can have mustDecrementX', () => {
    const cardinalPoint: CardinalPoint.Class = new CardinalPoint.Class({
      value: 'WEST',
      mustDecrementX: true,
    });

    expect(cardinalPoint.value).toStrictEqual('WEST');
    expect(cardinalPoint.mustDecrementX).toStrictEqual(true);
  });
  it('CardinalPoint - can have mustIncrementY', () => {
    const cardinalPoint: CardinalPoint.Class = new CardinalPoint.Class({
      value: 'NORTH',
      mustIncrementY: true,
    });

    expect(cardinalPoint.value).toStrictEqual('NORTH');
    expect(cardinalPoint.mustIncrementY).toStrictEqual(true);
  });
  // it('CardinalPoint - can have mustDecrementY', () => {
  //   const cardinalPoint: CardinalPoint.Class = new CardinalPoint.Class({
  //     value: 'SOUTH',
  //     mustDecrementY: true,
  //   });
  //
  //   expect(cardinalPoint.value).toStrictEqual('SOUTH');
  //   expect(cardinalPoint.mustDecrementY).toStrictEqual(true);
  // });
});
