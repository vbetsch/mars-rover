import { CardinalPoint } from '@app/domain/cardinal-point';
import { Compass } from '@app/domain/compass';

describe('Compass', () => {
  it('Compass - should have cardinal points', () => {
    const compass: Compass.Class = new Compass.Class({
      cardinalPoints: [
        new CardinalPoint.Class({ value: 'N' }),
        new CardinalPoint.Class({ value: 'E' }),
        new CardinalPoint.Class({ value: 'S' }),
        new CardinalPoint.Class({ value: 'W' }),
      ],
    });

    expect(compass.cardinalPoints).toStrictEqual(['N', 'E', 'S', 'W']);
  });
});
