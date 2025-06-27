import { Point } from '@app/domain/point';

export namespace Map {
  export const NOTHING: boolean = false;
  export const ROVER: boolean = true;

  export type Params = {
    readonly height: number;
    readonly width: number;
    readonly roverPosition?: Point.Class;
  };

  export class Class {
    private readonly _height: number;
    private readonly _width: number;
    private _roverPosition: Point.Class | null;
    private _matrix: boolean[][] = [];

    private _computeMatrix(): void {
      // eslint-disable-next-line max-params
      this._matrix = Array.from({ length: this.height }, (_, y) =>
        // eslint-disable-next-line max-params
        Array.from({ length: this.width }, (_, x) => {
          return this._roverPosition &&
            x === this._roverPosition.x - 1 &&
            y === this._roverPosition.y - 1
            ? ROVER
            : NOTHING;
        })
      );
    }

    public constructor(params: Params) {
      this._height = params.height;
      this._width = params.width;
      this._roverPosition = params.roverPosition ?? null;
      this._computeMatrix();
    }

    public get height(): number {
      return this._height;
    }

    public get width(): number {
      return this._width;
    }

    public get matrix(): boolean[][] {
      return this._matrix;
    }

    public get roverPosition(): Point.Class | null {
      return this._roverPosition;
    }

    public set roverPosition(value: Point.Class | null) {
      this._roverPosition = value;
      this._computeMatrix();
    }
  }
}
