import { Point } from '@app/domain/Point';
import { UnknownDirectionError } from '@app/errors/unknown-direction.error';
import { CardinalPoint } from './CardinalPoint';

export namespace Rover {
  export type Type = {
    readonly startingPoint: Point.Class;
    readonly direction: CardinalPoint.Enum;
  };

  export class Class {
    private _currentPosition: Point.Class;
    private _currentDirection: CardinalPoint.Enum;

    public constructor(params: Type) {
      this._currentPosition = params.startingPoint;
      this._currentDirection = params.direction;
    }

    public get position(): Point.Class {
      return this._currentPosition;
    }

    public get direction(): CardinalPoint.Enum {
      return this._currentDirection;
    }

    public moveForward(): void {
      switch (this._currentDirection) {
        case CardinalPoint.Enum.NORTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y + 1,
          });
          break;
        case CardinalPoint.Enum.EAST:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x + 1,
            y: this._currentPosition.y,
          });
          break;
        case CardinalPoint.Enum.SOUTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y - 1,
          });
          break;
        case CardinalPoint.Enum.WEST:
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
        case CardinalPoint.Enum.NORTH:
          this._currentDirection = CardinalPoint.Enum.WEST;
          break;
        case CardinalPoint.Enum.EAST:
          this._currentDirection = CardinalPoint.Enum.NORTH;
          break;
        case CardinalPoint.Enum.SOUTH:
          this._currentDirection = CardinalPoint.Enum.EAST;
          break;
        case CardinalPoint.Enum.WEST:
          this._currentDirection = CardinalPoint.Enum.SOUTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }

    public turnRight(): void {
      switch (this._currentDirection) {
        case CardinalPoint.Enum.NORTH:
          this._currentDirection = CardinalPoint.Enum.EAST;
          break;
        case CardinalPoint.Enum.EAST:
          this._currentDirection = CardinalPoint.Enum.SOUTH;
          break;
        case CardinalPoint.Enum.SOUTH:
          this._currentDirection = CardinalPoint.Enum.WEST;
          break;
        case CardinalPoint.Enum.WEST:
          this._currentDirection = CardinalPoint.Enum.NORTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }
  }
}
