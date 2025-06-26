import { Point } from '@app/domain/point';
import { UnknownDirectionError } from '@app/errors/unknown-direction.error';
import { Compass } from '@app/domain/compass';

export namespace Rover {
  export type Params = {
    readonly startingPoint: Point.Class;
    readonly direction: Compass.CardinalPointEnum;
  };

  export class Class {
    private _currentPosition: Point.Class;
    private _currentDirection: Compass.CardinalPointEnum;

    public constructor(params: Params) {
      this._currentPosition = params.startingPoint;
      this._currentDirection = params.direction;
    }

    public get position(): Point.Class {
      return this._currentPosition;
    }

    public get direction(): Compass.CardinalPointEnum {
      return this._currentDirection;
    }

    public moveForward(): void {
      switch (this._currentDirection) {
        case Compass.CardinalPointEnum.NORTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y + 1,
          });
          break;
        case Compass.CardinalPointEnum.EAST:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x + 1,
            y: this._currentPosition.y,
          });
          break;
        case Compass.CardinalPointEnum.SOUTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y - 1,
          });
          break;
        case Compass.CardinalPointEnum.WEST:
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
        case Compass.CardinalPointEnum.NORTH:
          this._currentDirection = Compass.CardinalPointEnum.WEST;
          break;
        case Compass.CardinalPointEnum.EAST:
          this._currentDirection = Compass.CardinalPointEnum.NORTH;
          break;
        case Compass.CardinalPointEnum.SOUTH:
          this._currentDirection = Compass.CardinalPointEnum.EAST;
          break;
        case Compass.CardinalPointEnum.WEST:
          this._currentDirection = Compass.CardinalPointEnum.SOUTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }

    public turnRight(): void {
      switch (this._currentDirection) {
        case Compass.CardinalPointEnum.NORTH:
          this._currentDirection = Compass.CardinalPointEnum.EAST;
          break;
        case Compass.CardinalPointEnum.EAST:
          this._currentDirection = Compass.CardinalPointEnum.SOUTH;
          break;
        case Compass.CardinalPointEnum.SOUTH:
          this._currentDirection = Compass.CardinalPointEnum.WEST;
          break;
        case Compass.CardinalPointEnum.WEST:
          this._currentDirection = Compass.CardinalPointEnum.NORTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }
  }
}
