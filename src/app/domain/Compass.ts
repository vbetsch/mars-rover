import { CardinalPoint } from '@app/domain/CardinalPoint';

export namespace Compass {
  export class Class {
    private readonly _cardinalPoints: CardinalPoint.Class[] = [
      new CardinalPoint.Class({ value: CardinalPoint.Enum.NORTH }),
      new CardinalPoint.Class({ value: CardinalPoint.Enum.EAST }),
      new CardinalPoint.Class({ value: CardinalPoint.Enum.SOUTH }),
      new CardinalPoint.Class({ value: CardinalPoint.Enum.WEST }),
    ];

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
