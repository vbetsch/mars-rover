type PointParams = {
  readonly x: number;
  readonly y: number;
};

export class Point {
  private readonly _x: number;
  private readonly _y: number;

  public constructor(params: PointParams) {
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
