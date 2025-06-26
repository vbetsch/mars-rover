export namespace CardinalPoint {
  export type Params = {
    readonly value: string;
    readonly mustIncrementX?: boolean;
    readonly mustDecrementX?: boolean;
  };

  export class Class {
    private readonly _value: string;
    private readonly _mustIncrementX: boolean;
    private readonly _mustDecrementX: boolean;

    public constructor(params: Params) {
      this._value = params.value;
      this._mustIncrementX = params.mustIncrementX ?? false;
      this._mustDecrementX = params.mustDecrementX ?? false;
    }

    public get value(): string {
      return this._value;
    }

    public get mustIncrementX(): boolean {
      return this._mustIncrementX;
    }

    public get mustDecrementX(): boolean {
      return this._mustDecrementX;
    }
  }
}
