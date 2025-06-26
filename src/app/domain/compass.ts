import { CardinalPoint } from './cardinal-point';

export namespace Compass {
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
}
