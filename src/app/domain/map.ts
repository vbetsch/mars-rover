import { Point } from '@app/domain/point';

export namespace Map {
  export const Values: Record<string, number> = {
    NOTHING: 0,
    ROVER: 1,
    OBSTACLE: 2,
  };

  export type Params = {
    readonly height: number;
    readonly width: number;
    readonly roverPosition?: Point.Class;
    readonly obstaclesPositions?: Point.Class[];
  };

  export class Class {
    private readonly _height: number;
    private readonly _width: number;
    private _roverPosition: Point.Class | null;
    private _obstaclesPositions: Point.Class[] | null;
    private _matrix: number[][] = [];

    // eslint-disable-next-line max-params
    private _areSameCoordinate(internal: number, external: number): boolean {
      return internal === external - 1;
    }

    private _computeMatrix(): void {
      // eslint-disable-next-line max-params
      this._matrix = Array.from({ length: this.height }, (_, y) =>
        // eslint-disable-next-line max-params
        Array.from({ length: this.width }, (_, x) => {
          if (
            this._roverPosition &&
            this._areSameCoordinate(x, this._roverPosition.x) &&
            this._areSameCoordinate(y, this._roverPosition.y)
          )
            return Values.ROVER;
          if (this._obstaclesPositions) {
            if (
              this._obstaclesPositions?.some(
                (obstaclePosition) =>
                  this._areSameCoordinate(x, obstaclePosition.x) &&
                  this._areSameCoordinate(y, obstaclePosition.y)
              )
            )
              return Values.OBSTACLE;
          }
          return Values.NOTHING;
        })
      );
    }

    public constructor(params: Params) {
      this._height = params.height;
      this._width = params.width;
      this._roverPosition = params.roverPosition ?? null;
      this._obstaclesPositions = params.obstaclesPositions ?? null;
      this._computeMatrix();
    }

    public get height(): number {
      return this._height;
    }

    public get width(): number {
      return this._width;
    }

    public get matrix(): number[][] {
      return this._matrix;
    }

    public get roverPosition(): Point.Class | null {
      return this._roverPosition;
    }

    public set roverPosition(value: Point.Class | null) {
      this._roverPosition = value;
      this._computeMatrix();
    }

    public get obstaclesPositions(): Point.Class[] | null {
      return this._obstaclesPositions;
    }

    public set obstaclesPositions(value: Point.Class[] | null) {
      this._obstaclesPositions = value;
      this._computeMatrix();
    }
  }
}
