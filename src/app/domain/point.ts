import { NegativeCoordinateError } from '@app/errors/negative-coordinate.error';

export namespace Point {
  export type Params = {
    readonly x: number;
    readonly y: number;
  };

  export class Class {
    private readonly _x: number;
    private readonly _y: number;

    public constructor(params: Params) {
      if (params.x < 0 || params.y < 0) throw new NegativeCoordinateError();

      this._x = params.x;
      this._y = params.y;
    }

    public get x(): number {
      return this._x;
    }

    public get y(): number {
      return this._y;
    }
  }
}
