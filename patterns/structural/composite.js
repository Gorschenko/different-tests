class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName("Engine");
    this.setPrice(800);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName("Body");
    this.setPrice(3000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName("Tools");
    this.setPrice(4000);
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map((e) => e.getPrice())
      .reduce((acc, currentValue) => acc + currentValue);
  }
}

class Car extends Composite {
  constructor() {
    super();
    this.setName("Audi");
  }
}

const car = new Car();

car.add(new Engine());
car.add(new Body());
car.add(new Tools());

console.log(`${car.getName()} price is ${car.getPrice()}`);
