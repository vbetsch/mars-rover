import { Point } from '@app/domain/point';

export namespace Map {
  export const NOTHING: boolean = false;

  export type Params = {
    readonly height: number;
    readonly width: number;
    readonly roverPosition?: Point.Class;
  };

  export class Class {
    private readonly _height: number;
    private readonly _width: number;
    private readonly _roverPosition: Point.Class | null;
    private _matrix: boolean[][] = [];

    private _computeMatrix(): void {
      this._matrix = Array.from({ length: this.height }, () =>
        Array.from({ length: this.width }, () => NOTHING)
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
  }
}
