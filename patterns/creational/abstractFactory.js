// First example
const bmwProducer = (kind) => {
  return kind === "sport" ? sportCarFactory : familyCarFactory;
};

const sportCarFactory = () => {
  return new Z4();
};

const familyCarFactory = () => {
  return new I3();
};

class Z4 {
  info() {
    return "Z4 is sport car";
  }
}

class I3 {
  info() {
    return "I3 is family car";
  }
}

const produce = bmwProducer("sport");
const myCar = produce();
console.log(myCar.info());

// Second example

class BaseCar {
  info() {
    console.log(this);
  }
}

class Bmw extends BaseCar {
  constructor(model, price, maxSpeed) {
    super();
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  static list = {
    X5: new Bmw("X5", 10000, 300),
    X6: new Bmw("X6", 12000, 350),
  };

  create(type) {
    return new BmwFactory.list[type]();
  }
}

class Audi extends BaseCar {
  constructor(model, price) {
    super();
    this.model = model;
    this.price = price;
  }
}

class AudiFactory {
  static list = {
    A8: new Audi("A8", 14000),
    Q5: new Audi("Q5", 16000),
  };

  create(type) {
    const car = AudiFactory.list[type];
    return car;
  }
}

class AbstractCarFactory {
  constructor(kind) {
    return kind === "audi" ? new AudiFactory() : new BmwFactory();
  }
}

const audiFactory = new AbstractCarFactory("audi");

const q5 = audiFactory.create("Q5");
const a8 = audiFactory.create("A8");

console.log(q5);
console.log(a8);
