import { CardinalPoint } from '@app/domain/CardinalPoint';

export namespace Compass {
  export type Params = {
    readonly cardinalPoints: readonly CardinalPoint.Class[];
  };

  export class Class {
    private readonly _cardinalPoints: readonly CardinalPoint.Class[];

    public constructor(params: Params) {
      this._cardinalPoints = params.cardinalPoints;
    }

    public getNorth(): CardinalPoint.Enum {
      return this._cardinalPoints[0].value;
    }

    public getEast(): CardinalPoint.Enum {
      return this._cardinalPoints[1].value;
    }

    public getSouth(): CardinalPoint.Enum {
      return this._cardinalPoints[2].value;
    }

    public getWest(): CardinalPoint.Enum {
      return this._cardinalPoints[3].value;
    }
  }
}
