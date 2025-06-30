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
  it('MovementPolicy - should not allow to move - both exceed', () => {
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
  it('MovementPolicy - should not allow to move - only x exceed', () => {
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: new Map.Class({
        height: 3,
        width: 3,
      }),
    });

    expect(
      policy.isMoveAllowed(
        new Point.Class({
          x: 4,
          y: 2,
        })
      )
    ).toBe(false);
  });
  it('MovementPolicy - should not allow to move - only y exceed', () => {
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
          y: 4,
        })
      )
    ).toBe(false);
  });
  it('MovementPolicy - should allow to move - both on the border', () => {
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
          y: 3,
        })
      )
    ).toBe(true);
  });
  it('MovementPolicy - should allow to move - y is on the border', () => {
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
  it('MovementPolicy - should allow to move - x is on the border', () => {
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
