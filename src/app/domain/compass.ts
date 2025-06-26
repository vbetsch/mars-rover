import { CardinalPoint } from './cardinal-point';

export namespace Compass {
  export enum Enum {
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
  }

  export const Instance: Class = new Class({
    cardinalPoints: [
      new CardinalPoint.Class({
        value: Enum.NORTH,
      }),
      new CardinalPoint.Class({
        value: Enum.EAST,
      }),
      new CardinalPoint.Class({
        value: Enum.SOUTH,
      }),
      new CardinalPoint.Class({
        value: Enum.WEST,
      }),
    ],
  });
}
