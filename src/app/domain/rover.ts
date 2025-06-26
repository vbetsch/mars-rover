import { Point } from '@app/domain/point';
import { UnknownDirectionError } from '@app/errors/unknown-direction.error';
import { Compass } from '@app/domain/compass';

export namespace Rover {
  export type Params = {
    readonly startingPoint: Point.Class;
    readonly direction: Compass.Enum;
  };

  export class Class {
    private _currentPosition: Point.Class;
    private _currentDirection: Compass.Enum;

    public constructor(params: Params) {
      this._currentPosition = params.startingPoint;
      this._currentDirection = params.direction;
    }

    public get position(): Point.Class {
      return this._currentPosition;
    }

    public get direction(): Compass.Enum {
      return this._currentDirection;
    }

    public moveForward(): void {
      switch (this._currentDirection) {
        case Compass.Enum.NORTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y + 1,
          });
          break;
        case Compass.Enum.EAST:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x + 1,
            y: this._currentPosition.y,
          });
          break;
        case Compass.Enum.SOUTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y - 1,
          });
          break;
        case Compass.Enum.WEST:
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
        case Compass.Enum.NORTH:
          this._currentDirection = Compass.Enum.WEST;
          break;
        case Compass.Enum.EAST:
          this._currentDirection = Compass.Enum.NORTH;
          break;
        case Compass.Enum.SOUTH:
          this._currentDirection = Compass.Enum.EAST;
          break;
        case Compass.Enum.WEST:
          this._currentDirection = Compass.Enum.SOUTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }

    public turnRight(): void {
      switch (this._currentDirection) {
        case Compass.Enum.NORTH:
          this._currentDirection = Compass.Enum.EAST;
          break;
        case Compass.Enum.EAST:
          this._currentDirection = Compass.Enum.SOUTH;
          break;
        case Compass.Enum.SOUTH:
          this._currentDirection = Compass.Enum.WEST;
          break;
        case Compass.Enum.WEST:
          this._currentDirection = Compass.Enum.NORTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }
  }
}
