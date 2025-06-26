export namespace CardinalPoint {
  export type Params = {
    readonly value: string;
    readonly mustIncrementX?: boolean;
  };

  export class Class {
    private readonly _value: string;
    private readonly _mustIncrementX: boolean = false;

    public constructor(params: Params) {
      this._value = params.value;
      this._mustIncrementX = params.mustIncrementX ?? false;
    }

    public get value(): string {
      return this._value;
    }

    public get mustIncrementX(): boolean {
      return this._mustIncrementX;
    }
  }
}
