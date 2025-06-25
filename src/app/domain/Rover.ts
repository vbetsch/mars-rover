import { Point } from '@app/domain/Point';

export namespace Rover {
  export type Type = {
    readonly point: Point.Class;
  };

  export class Class {
    private readonly _startingPoint: Point.Class;

    public constructor(params: Type) {
      this._startingPoint = params.point;
    }

    public get startingPoint(): Point.Class {
      return this._startingPoint;
    }
  }
}
