import { CardinalPoint } from '@app/domain/CardinalPoint';

export namespace Compass {
  export class Class {
    private readonly _cardinalPoints: CardinalPoint.Class[] = [
      new CardinalPoint.Class({ value: CardinalPoint.Enum.NORTH }),
      new CardinalPoint.Class({ value: CardinalPoint.Enum.EAST }),
      new CardinalPoint.Class({ value: CardinalPoint.Enum.SOUTH }),
      new CardinalPoint.Class({ value: CardinalPoint.Enum.WEST }),
    ];
  }
}
