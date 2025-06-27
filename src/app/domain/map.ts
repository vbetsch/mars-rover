export namespace Map {
  export type Params = {
    readonly height: number;
    readonly width: number;
  };

  export class Class {
    private readonly _height: number;
    private readonly _width: number;
    private _matrix: string[][] = [];

    private _computeMatrix(): void {
      const matrix: string[][] = [];
      for (let y = 0; y < this.height; y++) {
        const line: string[] = [];
        for (let x = 0; x < this.width; x++) {
          line.push('X');
        }
        matrix.push(line);
      }
      this._matrix = matrix;
    }

    public constructor(params: Params) {
      this._height = params.height;
      this._width = params.width;
      this._computeMatrix();
    }

    public get height(): number {
      return this._height;
    }

    public get width(): number {
      return this._width;
    }

    public get matrix(): string[][] {
      return this._matrix;
    }
  }
}
