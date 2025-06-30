import { Rover } from '@app/domain/rover';
import { Point } from '@app/domain/point';
import { Compass } from '@app/domain/compass';
import { CardinalPoint } from '@app/domain/cardinal-point';
import { MovementPolicy } from '@app/domain/movement-policy';
import { Map } from '@app/domain/map';
import { CannotMoveError } from '@app/errors/cannot-move.error';

function _displayDirection(direction: CardinalPoint.Class): string {
  switch (direction) {
    case Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.NORTH):
      return '⬆️';
    case Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.EAST):
      return '➡️';
    case Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.SOUTH):
      return '⬇️';
    case Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.WEST):
      return '⬅️';
    default:
      throw new Error(`Unknown direction: ${direction}`);
  }
}

function displayRover(rover: Rover.Class): string {
  return `direction: ${_displayDirection(rover.direction)}  |  position: ${rover.position.x},${rover.position.y}`;
}

function moveForward(rover: Rover.Class): void {
  try {
    rover.moveForward();
  } catch (error: unknown) {
    if (error instanceof CannotMoveError) {
      console.error(error.message);
    }
  }
}

console.log('Hello World!');

console.log('Creating a Rover...');
const rover: Rover.Class = new Rover.Class({
  movementPolicy: new MovementPolicy.Class({
    map: new Map.Class({
      height: 5,
      width: 5,
    }),
  }),
  startingPoint: new Point.Class({ x: 0, y: 0 }),
  direction: Compass.Instance.getCardinalPoint(Compass.CardinalPointEnum.EAST),
});
console.log('\nYour Rover is created !');
console.log(displayRover(rover));

console.log('\nYour Rover is moving forward...');
moveForward(rover);
console.log(displayRover(rover));

console.log('\nYour Rover is turning left...');
rover.turnLeft();
console.log(displayRover(rover));

console.log('\nYour Rover is moving forward...');
moveForward(rover);
console.log(displayRover(rover));

console.log('\nYour Rover is turning right...');
rover.turnRight();
console.log(displayRover(rover));

console.log('\nYour Rover is moving forward...');
moveForward(rover);
console.log(displayRover(rover));

console.log('\nYour Rover is moving forward...');
moveForward(rover);
console.log(displayRover(rover));

console.log('\nYour Rover is moving forward...');
moveForward(rover);
console.log(displayRover(rover));

console.log('\nYour Rover is moving forward...');
moveForward(rover);
console.log(displayRover(rover));

console.log('\nYour Rover is moving forward...');
moveForward(rover);
console.log(displayRover(rover));
