export namespace Map {
  export type Params = {
    readonly height: number;
    readonly width: number;
  };

  export class Class {
    private readonly _height: number;
    private readonly _width: number;

    public constructor(params: Params) {
      this._height = params.height;
      this._width = params.width;
    }

    public get height(): number {
      return this._height;
    }

    public get width(): number {
      return this._width;
    }
  }
}
