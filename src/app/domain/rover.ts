import { Point } from '@app/domain/point';
import { UnknownDirectionError } from '@app/errors/unknown-direction.error';
import { Compass } from '@app/domain/compass';
import { CardinalPoint } from '@app/domain/cardinal-point';

export namespace Rover {
  export type Params = {
    readonly startingPoint: Point.Class;
    readonly direction: CardinalPoint.Class;
  };

  export class Class {
    private _currentPosition: Point.Class;
    private _currentDirection: CardinalPoint.Class;

    public constructor(params: Params) {
      this._currentPosition = params.startingPoint;
      this._currentDirection = params.direction;
    }

    public get position(): Point.Class {
      return this._currentPosition;
    }

    public get direction(): CardinalPoint.Class {
      return this._currentDirection;
    }

    public moveForward(): void {
      let xReached: number = this._currentPosition.x;
      let yReached: number = this._currentPosition.y;
      if (this._currentDirection.mustIncrementX) {
        xReached += 1;
      }
      if (this._currentDirection.mustDecrementX) {
        xReached -= 1;
      }
      if (this._currentDirection.mustIncrementY) {
        yReached += 1;
      }
      if (this._currentDirection.mustDecrementY) {
        yReached -= 1;
      }
      this._currentPosition = new Point.Class({
        x: xReached,
        y: yReached,
      });
    }

    public turnLeft(): void {
      switch (this._currentDirection.value) {
        case Compass.CardinalPointEnum.NORTH:
          this._currentDirection = new CardinalPoint.Class({
            value: Compass.CardinalPointEnum.WEST,
            mustDecrementX: true,
          });
          break;
        case Compass.CardinalPointEnum.EAST:
          this._currentDirection = new CardinalPoint.Class({
            value: Compass.CardinalPointEnum.NORTH,
            mustIncrementY: true,
          });
          break;
        case Compass.CardinalPointEnum.SOUTH:
          this._currentDirection = new CardinalPoint.Class({
            value: Compass.CardinalPointEnum.EAST,
            mustIncrementX: true,
          });
          break;
        case Compass.CardinalPointEnum.WEST:
          this._currentDirection = new CardinalPoint.Class({
            value: Compass.CardinalPointEnum.SOUTH,
            mustDecrementY: true,
          });
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection.value);
      }
    }

    public turnRight(): void {
      switch (this._currentDirection.value) {
        case Compass.CardinalPointEnum.NORTH:
          this._currentDirection = new CardinalPoint.Class({
            value: Compass.CardinalPointEnum.EAST,
            mustIncrementX: true,
          });
          break;
        case Compass.CardinalPointEnum.EAST:
          this._currentDirection = new CardinalPoint.Class({
            value: Compass.CardinalPointEnum.SOUTH,
            mustDecrementY: true,
          });
          break;
        case Compass.CardinalPointEnum.SOUTH:
          this._currentDirection = new CardinalPoint.Class({
            value: Compass.CardinalPointEnum.WEST,
            mustDecrementX: true,
          });
          break;
        case Compass.CardinalPointEnum.WEST:
          this._currentDirection = new CardinalPoint.Class({
            value: Compass.CardinalPointEnum.NORTH,
            mustIncrementY: true,
          });
          break;
        default:
          throw new UnknownDirectionError(this._currentDirection.value);
      }
    }
  }
}
