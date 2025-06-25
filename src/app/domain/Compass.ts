import { CardinalPoint } from '@app/domain/CardinalPoint';

export namespace Compass {
  export type Type = {
    readonly cardinalPoints: CardinalPoint.Class[];
  };

  export class Class {
    private readonly _cardinalPoints: CardinalPoint.Class[];

    public constructor(params: Type) {
      this._cardinalPoints = params.cardinalPoints;
    }

    public get cardinalPoints(): CardinalPoint.Class[] {
      return this._cardinalPoints;
    }
  }
}
