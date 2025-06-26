import { CardinalPoint } from '@app/domain/CardinalPoint';

describe('Compass', () => {
  it('Compass - should have cardinal points', () => {
    const compass: Compass.Class = new Compass.Class({
      cardinalPoints: [
        new CardinalPoint({ value: 'N' }),
        new CardinalPoint({ value: 'E' }),
        new CardinalPoint({ value: 'S' }),
        new CardinalPoint({ value: 'W' }),
      ],
    });

    expect(compass.cardinalPoints).toStrictEqual(['N', 'E', 'S', 'W']);
  });
});
