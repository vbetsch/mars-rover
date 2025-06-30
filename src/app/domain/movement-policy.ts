import { Map } from '@app/domain/map';
import { Point } from '@app/domain/point';

export namespace MovementPolicy {
  export type Params = {
    readonly map: Map.Class;
  };

  export class Class {
    private readonly _map: Map.Class;

    public constructor(params: Params) {
      this._map = params.map;
    }

    public get map(): Map.Class {
      return this._map;
    }

    public isOutsideBorders(position: Point.Class): boolean {
      return position.x > this._map.height || position.y > this._map.width;
    }

    public isMoveAllowed(position: Point.Class): boolean {
      // TODO: add isFacedObstacle rule
      return !this.isOutsideBorders(position);
    }
  }
}
