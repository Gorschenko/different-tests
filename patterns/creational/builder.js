class Car {
  constructor() {
    this.autopilot = false;
    this.parktronic = false;
    this.singnaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutopilot(autopilot) {
    this.car.autopilot = autopilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(singnaling) {
    this.car.singnaling = singnaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const car1 = new CarBuilder()
  .addAutopilot(true)
  .addParktronic(true)
  .updateEngine("V8")
  .build();

const car2 = new CarBuilder().addAutopilot(true).addSignaling(true).build();

console.log(car1, car2);
