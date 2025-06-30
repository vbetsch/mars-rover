import { Map } from '@app/domain/map';
import { MovementPolicy } from '@app/domain/movement-policy';
import { Point } from '@app/domain/point';

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
  it('MovementPolicy - should not allow to move', () => {
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: new Map.Class({
        height: 3,
        width: 3,
      }),
    });

    expect(
      policy.isMoveAllowed(
        new Point.Class({
          x: 5,
          y: 5,
        })
      )
    ).toBe(false);
  });
  it('MovementPolicy - should allow to move', () => {
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: new Map.Class({
        height: 3,
        width: 3,
      }),
    });

    expect(
      policy.isMoveAllowed(
        new Point.Class({
          x: 2,
          y: 3,
        })
      )
    ).toBe(true);
  });
  it('MovementPolicy - should allow to move', () => {
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: new Map.Class({
        height: 3,
        width: 3,
      }),
    });

    expect(
      policy.isMoveAllowed(
        new Point.Class({
          x: 3,
          y: 2,
        })
      )
    ).toBe(true);
  });
});
