// First example

class CarConveyor {
  setBody() {
    console.log("Body configured");
  }

  getEngine() {
    console.log("Engine");
  }

  setEngine() {
    console.log("Engine configured");
  }

  getInterior() {
    console.log("Interior");
  }

  setInterior() {
    console.log("Interior configured");
  }

  setExterior() {
    console.log("Exterior configured");
  }

  setWheels() {
    console.log("Wheels added");
  }

  setElectronics() {
    console.log("Electronics configured");
  }

  paint() {
    console.log("Painted");
  }
}

class CarConveyorFacade {
  constructor(carConveyor) {
    this.carConveyor = carConveyor;
  }

  assembleCar() {
    this.carConveyor.setBody();
    this.carConveyor.setEngine();
    this.carConveyor.setInterior();
    this.carConveyor.setExterior();
    this.carConveyor.setWheels();
    this.carConveyor.setElectronics();
    this.carConveyor.paint();
  }

  changeEngine() {
    this.carConveyor.getEngine();
    this.carConveyor.setEngine();
  }

  changeInterior() {
    this.carConveyor.getInterior();
    this.carConveyor.setInterior();
  }
}

const carConveyor = new CarConveyorFacade(new CarConveyor());

let car = carConveyor.assembleCar();
car = carConveyor.changeEngine();
car = carConveyor.changeInterior();

console.log(car);
