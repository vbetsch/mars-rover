import { Point } from '@app/domain/Point';
import { DirectionsEnum } from '@app/enums/directions.enum';

export namespace Rover {
  export type Type = {
    readonly startingPoint: Point.Class;
    readonly direction: DirectionsEnum;
  };

  export class Class {
    private _currentPosition: Point.Class;
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

    public moveForward(): void {
      switch (this._currentDirection) {
        case DirectionsEnum.NORTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y + 1,
          });
          break;
        case DirectionsEnum.EAST:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x + 1,
            y: this._currentPosition.y,
          });
          break;
        case DirectionsEnum.SOUTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y - 1,
          });
          break;
        case DirectionsEnum.WEST:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x - 1,
            y: this._currentPosition.y,
          });
          break;
        default:
          throw new Error(`Unknown Direction: ${this._currentDirection}`);
      }
    }
  }
}
