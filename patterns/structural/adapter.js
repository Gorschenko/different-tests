class EngineV2 {
  simpleInterface() {
    console.log("It is engine 2.0");
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log("It is engine 8.0");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

class Car {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

const car1 = new Car();
const oldEngine = new EngineV2();
car1.startEngine(oldEngine);

const car2 = new Car();
const engineAdapter1 = new EngineV8Adapter(new EngineV8());
car2.startEngine(engineAdapter1);

// Error
const car3 = new Car();
const engine = new EngineV8();
car3.startEngine(engine);
