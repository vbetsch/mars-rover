import { Map } from '@app/domain/map';
import { MovementPolicy } from '@app/domain/movement-policy';

describe('MovementPolicy', () => {
  it('MovementPolicy - should have a map', () => {
    const map: Map.Class = new Map.Class({
      height: 3,
      width: 3,
    });
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: map,
    });

    expect(policy.map).toStrictEqual(map);
  });
});
