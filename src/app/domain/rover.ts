import { Point } from '@app/domain/point';
import { Compass } from '@app/domain/compass';
import { CardinalPoint } from '@app/domain/cardinal-point';
import { MovementPolicy } from '@app/domain/movement-policy';

export namespace Rover {
  export type Params = {
    readonly movementPolicy: MovementPolicy.Class;
    readonly startingPoint: Point.Class;
    readonly direction: CardinalPoint.Class;
  };

  export class Class {
    private readonly _movementPolicy: MovementPolicy.Class;
    private _currentPosition: Point.Class;
    private _currentDirection: CardinalPoint.Class;

    public constructor(params: Params) {
      this._movementPolicy = params.movementPolicy;
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
      const newPosition = new Point.Class({
        x: xReached,
        y: yReached,
      });
      const isMoveAllowedResult: MovementPolicy.MoveResult =
        this._movementPolicy.isMoveAllowed(newPosition);
      if (!isMoveAllowedResult.allowed) {
        throw new Error(isMoveAllowedResult.reason);
      }
      this._currentPosition = newPosition;
    }

    public turnLeft(): void {
      this._currentDirection = Compass.Instance.getNextLeftCardinalPoint(
        this._currentDirection
      );
    }

    public turnRight(): void {
      this._currentDirection = Compass.Instance.getNextRightCardinalPoint(
        this._currentDirection
      );
    }
  }
}
