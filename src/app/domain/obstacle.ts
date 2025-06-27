import { Point } from '@app/domain/point';

export namespace Obstacle {
  export type Params = {
    readonly position: Point.Class;
  };

  export class Class {
    private readonly _position: Point.Class;

    public constructor(params: Params) {
      this._position = params.position;
    }

    public get position(): Point.Class {
      return this._position;
    }
  }
}
