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

  export class Class {
    private readonly _cardinalPoints: CardinalPoint.Class[];

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
