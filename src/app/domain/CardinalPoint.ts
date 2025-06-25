export namespace CardinalPoint {
  export enum Enum {
    NORTH = 'N',
    EAST = 'E',
    SOUTH = 'S',
    WEST = 'W',
  }

  export type Type = {
    readonly value: Enum;
  };

  export class Class {
    private readonly _value: Enum;

    public constructor(params: Type) {
      this._value = params.value;
    }

    public get value(): Enum {
      return this._value;
    }
  }
}
