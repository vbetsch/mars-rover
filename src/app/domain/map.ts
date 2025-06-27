import { Point } from '@app/domain/point';

export namespace Map {
  export const NOTHING: boolean = false;

  export type Params = {
    readonly height: number;
    readonly width: number;
    readonly rover?: Point.Class;
  };

  export class Class {
    private readonly _height: number;
    private readonly _width: number;
    private readonly _rover: Point.Class | null;
    private _matrix: boolean[][] = [];

    private _computeMatrix(): void {
      const matrix: boolean[][] = [];
      for (let y = 0; y < this.height; y++) {
        const line: boolean[] = [];
        for (let x = 0; x < this.width; x++) {
          line.push(NOTHING);
        }
        matrix.push(line);
      }
      this._matrix = matrix;
    }

    public constructor(params: Params) {
      this._height = params.height;
      this._width = params.width;
      this._rover = params.rover ?? null;
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

    public get rover(): Point.Class | null {
      return this._rover;
    }
  }
}
