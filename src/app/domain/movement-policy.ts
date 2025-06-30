import { Map } from '@app/domain/map';
import { Point } from '@app/domain/point';

export namespace MovementPolicy {
  export type Params = {
    readonly map: Map.Class;
  };

  export type MoveResult = {
    readonly allowed: boolean;
    readonly reason?: MoveResultReasonsEnum;
  };

  export enum MoveResultReasonsEnum {
    BOUNDARY = 1,
    OBSTACLE = 2,
  }

  export class Class {
    private readonly _map: Map.Class;

    public constructor(params: Params) {
      this._map = params.map;
    }

    public get map(): Map.Class {
      return this._map;
    }

    private _isOutsideBoundaries(position: Point.Class): boolean {
      return (
        position.x < 0 ||
        position.y < 0 ||
        position.x > this._map.height ||
        position.y > this._map.width
      );
    }

    private _isFacedObstacle(position: Point.Class): boolean {
      return (
        this._map.obstaclesPositions?.some(
          (positionObstacle) =>
            position.x === positionObstacle.x &&
            position.y === positionObstacle.y
        ) ?? false
      );
    }

    public isMoveAllowed(position: Point.Class): MoveResult {
      if (this._isOutsideBoundaries(position))
        return {
          allowed: false,
          reason: MoveResultReasonsEnum.BOUNDARY,
        };

      if (this._isFacedObstacle(position))
        return {
          allowed: false,
          reason: MoveResultReasonsEnum.OBSTACLE,
        };

      return {
        allowed: true,
      };
    }
  }
}
