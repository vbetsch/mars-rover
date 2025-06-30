import { CardinalPoint } from './cardinal-point';

export namespace Compass {
  export enum CardinalPointEnum {
    NORTH = 'N',
    EAST = 'E',
    SOUTH = 'S',
    WEST = 'W',
  }

  export type Params = {
    readonly cardinalPoints: CardinalPoint.Class[];
  };

  class Class {
    private readonly _cardinalPoints: CardinalPoint.Class[];

    private _getIndexOfCardinalPoint(
      cardinalPoint: CardinalPoint.Class
    ): number {
      return this._cardinalPoints.indexOf(cardinalPoint);
    }

    private _getCardinalPointByIndex(index: number): CardinalPoint.Class {
      let indexToFind: number = index;
      if (indexToFind < 0) indexToFind += this._cardinalPoints.length;

      return this._cardinalPoints[indexToFind % this._cardinalPoints.length];
    }

    public constructor(params: Params) {
      this._cardinalPoints = params.cardinalPoints;
    }

    public get cardinalPoints(): string[] {
      return this._cardinalPoints.map((cardinalPoint) => cardinalPoint.value);
    }

    public getCardinalPoint(
      cardinalPointValue: CardinalPointEnum
    ): CardinalPoint.Class {
      return this._cardinalPoints.filter(
        (cardinalPoint) => cardinalPoint.value === cardinalPointValue
      )[0];
    }

    public getNextLeftCardinalPoint(
      cardinalPoint: CardinalPoint.Class
    ): CardinalPoint.Class {
      return this._getCardinalPointByIndex(
        this._getIndexOfCardinalPoint(cardinalPoint) - 1
      );
    }

    public getNextRightCardinalPoint(
      cardinalPoint: CardinalPoint.Class
    ): CardinalPoint.Class {
      return this._getCardinalPointByIndex(
        this._getIndexOfCardinalPoint(cardinalPoint) + 1
      );
    }
  }

  export const Instance: Class = new Class({
    cardinalPoints: [
      new CardinalPoint.Class({
        value: CardinalPointEnum.NORTH,
        mustIncrementY: true,
      }),
      new CardinalPoint.Class({
        value: CardinalPointEnum.EAST,
        mustIncrementX: true,
      }),
      new CardinalPoint.Class({
        value: CardinalPointEnum.SOUTH,
        mustDecrementY: true,
      }),
      new CardinalPoint.Class({
        value: CardinalPointEnum.WEST,
        mustDecrementX: true,
      }),
    ],
  });
}
