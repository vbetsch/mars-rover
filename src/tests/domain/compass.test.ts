import { Compass } from '@app/domain/compass';

describe('Compass', () => {
  it('Compass - should have cardinal points', () => {
    expect(Compass.Instance.cardinalPoints).toStrictEqual(['N', 'E', 'S', 'W']);
  });
});
