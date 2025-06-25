import { CardinalPointsEnum } from '@app/enums/cardinal-points.enum';

export namespace CardinalPoint {
  export type Type = {
    readonly value: CardinalPointsEnum;
  };

  export class Class {
    private readonly _value: CardinalPointsEnum;

    public constructor(params: Type) {
      this._value = params.value;
    }

    public get value(): CardinalPointsEnum {
      return this._value;
    }
  }
}
