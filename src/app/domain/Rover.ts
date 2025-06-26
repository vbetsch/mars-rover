import { Point } from '@app/domain/Point';
import { CardinalPointsEnum } from '@app/enums/cardinal-points.enum';
import { UnknownDirectionError } from '@app/errors/unknown-direction.error';

export namespace Rover {
  export type Type = {
    readonly startingPoint: Point.Class;
    readonly direction: CardinalPointsEnum;
  };

  export class Class {
    private _currentPosition: Point.Class;
    private _currentDirection: CardinalPointsEnum;

    public constructor(params: Type) {
      this._currentPosition = params.startingPoint;
      this._currentDirection = params.direction;
    }

    public get position(): Point.Class {
      return this._currentPosition;
    }

    public get direction(): CardinalPointsEnum {
      return this._currentDirection;
    }

    public moveForward(): void {
      switch (this._currentDirection) {
        case CardinalPointsEnum.NORTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y + 1,
          });
          break;
        case CardinalPointsEnum.EAST:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x + 1,
            y: this._currentPosition.y,
          });
          break;
        case CardinalPointsEnum.SOUTH:
          this._currentPosition = new Point.Class({
            x: this._currentPosition.x,
            y: this._currentPosition.y - 1,
          });
          break;
        case CardinalPointsEnum.WEST:
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
        case CardinalPointsEnum.NORTH:
          this._currentDirection = CardinalPointsEnum.WEST;
          break;
        case CardinalPointsEnum.EAST:
          this._currentDirection = CardinalPointsEnum.NORTH;
          break;
        case CardinalPointsEnum.SOUTH:
          this._currentDirection = CardinalPointsEnum.EAST;
          break;
        case CardinalPointsEnum.WEST:
          this._currentDirection = CardinalPointsEnum.SOUTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }

    public turnRight(): void {
      switch (this._currentDirection) {
        case CardinalPointsEnum.NORTH:
          this._currentDirection = CardinalPointsEnum.EAST;
          break;
        case CardinalPointsEnum.EAST:
          this._currentDirection = CardinalPointsEnum.SOUTH;
          break;
        case CardinalPointsEnum.SOUTH:
          this._currentDirection = CardinalPointsEnum.WEST;
          break;
        case CardinalPointsEnum.WEST:
          this._currentDirection = CardinalPointsEnum.NORTH;
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection);
      }
    }
  }
}
