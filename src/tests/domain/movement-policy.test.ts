import { Map } from '@app/domain/map';
import { Point } from '@app/domain/point';
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
  it('MovementPolicy - should not allow to move - BOUNDARY - both exceed', () => {
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
    ).toStrictEqual({
      allowed: false,
      reason: MovementPolicy.MoveResultReasonsEnum.BOUNDARY,
    });
  });
  it('MovementPolicy - should not allow to move - BOUNDARY - only x exceed', () => {
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
    ).toStrictEqual({
      allowed: false,
      reason: MovementPolicy.MoveResultReasonsEnum.BOUNDARY,
    });
  });
  it('MovementPolicy - should not allow to move - BOUNDARY - only y exceed', () => {
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
    ).toStrictEqual({
      allowed: false,
      reason: MovementPolicy.MoveResultReasonsEnum.BOUNDARY,
    });
  });
  it('MovementPolicy - should allow to move - BOUNDARY - both on the boundary', () => {
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
    ).toStrictEqual({
      allowed: true,
    });
  });
  it('MovementPolicy - should allow to move - BOUNDARY - y is on the boundary', () => {
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
    ).toStrictEqual({
      allowed: true,
    });
  });
  it('MovementPolicy - should allow to move - BOUNDARY - x is on the boundary', () => {
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
    ).toStrictEqual({
      allowed: true,
    });
  });
  it('MovementPolicy - should allow to move - BOUNDARY - normal case', () => {
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
          y: 2,
        })
      )
    ).toStrictEqual({
      allowed: true,
    });
  });
  it('MovementPolicy - should not allow to move - OBSTACLE - exactly on a obstacle', () => {
    const obstaclePosition: Point.Class = new Point.Class({
      x: 2,
      y: 2,
    });
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: new Map.Class({
        height: 3,
        width: 3,
        obstaclesPositions: [obstaclePosition],
      }),
    });

    expect(policy.isMoveAllowed(obstaclePosition)).toStrictEqual({
      allowed: false,
      reason: MovementPolicy.MoveResultReasonsEnum.OBSTACLE,
    });
  });
  it('MovementPolicy - should allow to move - OBSTACLE - just x same as obstacle', () => {
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: new Map.Class({
        height: 3,
        width: 3,
        obstaclesPositions: [
          new Point.Class({
            x: 1,
            y: 2,
          }),
        ],
      }),
    });

    expect(
      policy.isMoveAllowed(
        new Point.Class({
          x: 1,
          y: 3,
        })
      )
    ).toStrictEqual({
      allowed: true,
    });
  });
  it('MovementPolicy - should allow to move - OBSTACLE - just y same as obstacle', () => {
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: new Map.Class({
        height: 3,
        width: 3,
        obstaclesPositions: [
          new Point.Class({
            x: 1,
            y: 2,
          }),
        ],
      }),
    });

    expect(
      policy.isMoveAllowed(
        new Point.Class({
          x: 3,
          y: 2,
        })
      )
    ).toStrictEqual({
      allowed: true,
    });
  });
  it('MovementPolicy - should allow to move - OBSTACLE - not on a obstacle', () => {
    const policy: MovementPolicy.Class = new MovementPolicy.Class({
      map: new Map.Class({
        height: 3,
        width: 3,
        obstaclesPositions: [
          new Point.Class({
            x: 1,
            y: 2,
          }),
        ],
      }),
    });

    expect(
      policy.isMoveAllowed(
        new Point.Class({
          x: 3,
          y: 3,
        })
      )
    ).toStrictEqual({
      allowed: true,
    });
  });
});
