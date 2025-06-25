import { Point } from '@app/domain/Point';
import { DirectionsEnum } from '@app/enums/directions.enum';

export namespace Rover {
  export type Type = {
    readonly startingPoint: Point.Class;
    readonly direction: DirectionsEnum;
  };

  export class Class {
    private readonly _currentPosition: Point.Class;
    private readonly _currentDirection: DirectionsEnum;

    public constructor(params: Type) {
      this._currentPosition = params.startingPoint;
      this._currentDirection = params.direction;
    }

    public get position(): Point.Class {
      return this._currentPosition;
    }

    public get direction(): DirectionsEnum {
      return this._currentDirection;
    }
  }
}
