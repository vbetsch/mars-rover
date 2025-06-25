import { Point } from '@app/domain/Point';

export namespace Rover {
  export type Type = {
    readonly point: Point.Class;
  };

  export class Class {
    private readonly _currentPosition: Point.Class;

    public constructor(params: Type) {
      this._currentPosition = params.point;
    }

    public get position(): Point.Class {
      return this._currentPosition;
    }
  }
}
