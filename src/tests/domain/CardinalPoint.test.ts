import { CardinalPoint } from '@app/domain/CardinalPoint';

describe('CardinalPoint', () => {
  it('CardinalPoint - should have a value', () => {
    const cardinalPoint: CardinalPoint.Class = new CardinalPoint.Class({
      value: 'NORTH',
    });

    expect(cardinalPoint.value).toStrictEqual('NORTH');
  });
});
