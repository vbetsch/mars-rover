export namespace CardinalPoint {
  export type Params = {
    readonly value: string;
  };

  export class Class {
    private readonly _value: string;

    public constructor(params: Params) {
      this._value = params.value;
    }

    public get value(): string {
      return this._value;
    }
  }
}
