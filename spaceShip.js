// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console
//   `${name} moving to ${topSpeed}`
class SpaceShip {
  constructor(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
  }

  accelerate() {
    console.log(`${this.name} spaceship moving to ${this.topSpeed} mph`);
  }
}

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.
const spaceshipA = new SpaceShip("Parker Solar Probe", 4300000);
const spaceshipB = new SpaceShip("Juno", 165000);

spaceshipA.accelerate();
spaceshipB.accelerate();
