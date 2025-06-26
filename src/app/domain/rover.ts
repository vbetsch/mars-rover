import { Point } from '@app/domain/point';
import { DirectionsEnum } from '@app/enums/directions.enum';
import { UnknownDirectionError } from '@app/errors/unknown-direction.error';

export namespace Rover {
  export type Params = {
    readonly startingPoint: Point.Class;
    readonly direction: DirectionsEnum;
  };

  export class Class {
    private _currentPosition: Point.Class;
    private _currentDirection: DirectionsEnum;

    public constructor(params: Params) {
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
          throw new UnknownDirectionError(this._currentDirection);
      }
    }

    public turnLeft(): void {
      switch (this._currentDirection) {
        case DirectionsEnum.NORTH:
          this._currentDirection = DirectionsEnum.WEST;
          break;
        case DirectionsEnum.EAST:
          this._currentDirection = DirectionsEnum.NORTH;
          break;
        case DirectionsEnum.SOUTH:
          this._currentDirection = DirectionsEnum.EAST;
          break;
        case DirectionsEnum.WEST:
          this._currentDirection = DirectionsEnum.SOUTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }

    public turnRight(): void {
      switch (this._currentDirection) {
        case DirectionsEnum.NORTH:
          this._currentDirection = DirectionsEnum.EAST;
          break;
        case DirectionsEnum.EAST:
          this._currentDirection = DirectionsEnum.SOUTH;
          break;
        case DirectionsEnum.SOUTH:
          this._currentDirection = DirectionsEnum.WEST;
          break;
        case DirectionsEnum.WEST:
          this._currentDirection = DirectionsEnum.NORTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }
  }
}
